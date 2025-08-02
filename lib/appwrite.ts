export const appwriteConfig = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  Platform: process.env.PLATFORM,
  databaseId: process.env.DATABASE_ID,
  usersCollections: process.env.USER_COLLECTIONS,
};