import { CreateUserPrams, SignInParams, User } from "@/type";
import { Account, Avatars, Client, Databases, ID, Query } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
  platform: "com.pw.foodordering",
  databaseId: "688e094100121b10ae9f",
  usersCollections: "688e09b00010b1b183a8",
};

export const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

export const account = new Account(client);
export const databases = new Databases(client);
const avatars = new Avatars(client);

export const createUser = async ({
  email,
  password,
  name,
}: CreateUserPrams) => {
  try {
    const newAccount = await account.create(ID.unique(), email, password, name);
    if (!newAccount) {
      throw new Error("User creation failed");
    }
    await signIn({
      email,
      password,
    });

    const avatarUrl = avatars.getInitialsURL(name);

    return await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollections,
      ID.unique(),
      { email, name, accountID: newAccount.$id, avatar: avatarUrl }
    );

  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const signIn = async ({ email, password }: SignInParams) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};


export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) {
      throw new Error("User not found");
    }
    const currentUser = await databases.listDocuments<User>(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollections,
      [Query.equal("accountID", currentAccount.$id)],
    );

    if (!currentUser) {
      throw new Error("User not found");
    }

    if (!currentUser.documents.length) return null;

    return currentUser.documents[0];
  } catch (error) {
    console.error("Error fetching current user:", error);
    throw error;
  }
};