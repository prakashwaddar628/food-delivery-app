import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { createUser } from "@/lib/appwrite";
import { router, Link } from "expo-router";
import { useState } from "react";
import { View, Text, Alert } from "react-native";

export default function SignUp() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async () => {
    const { email, password, name } = form;
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }
    setIsSubmitting(true);

    try {
      await createUser({ email, password, name });
      
      router.replace("/");
    } catch (error) {
      Alert.alert("Error", "Sign Up failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="gap-5 bg-white rounded-lg p-5 mt-3">
      <CustomInput
        placeholder="enter your name"
        label="Name"
        value={form.name}
        onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
      />

      <CustomInput
        placeholder="enter your email (@email.com)"
        label="Email"
        keyboardType="email-address"
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
      />

      <CustomInput
        placeholder="enter your password"
        label="Password"
        secureTextEntry={true}
        value={form.password}
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, password: text }))
        }
      />
      <CustomButton
        isLoading={isSubmitting}
        title="Sign Up"
        onPress={() => submit()}
      />
      <View className="flex justify-center flex-row gap-2">
        <Text className="base-regular text-gray-100">
          Already have an account?{" "}
          <Link className="base-bold text-primary" href="/signin">
            Sign In
          </Link>
        </Text>
      </View>
    </View>
  );
}
