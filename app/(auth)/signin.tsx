import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { router, Link } from "expo-router";
import { useState } from "react";
import { View, Text, Alert } from "react-native";

export default function SignIn() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  
  const submit = async () =>{
    if (!form.email || !form.password) {
      alert("Please fill in all fields");
      return;
    }
    setIsSubmitting(true);

    try{
      // call appwrite sign in function
      Alert.alert("Success", "Sign in successful");
      router.replace("/");
    }catch(error){
      Alert.alert("Error", "Sign in failed");
    }finally{
      setIsSubmitting(false);
    }
  }

  return (
    <View className="gap-5 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        placeholder="enter your username (@email.com)"
        label="Username"
        keyboardType="email-address"
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
      />

      <CustomInput
        placeholder="enter your password"
        label="Password"
        secureTextEntry={true}
        value={form.password}
        onChangeText={(text) => setForm((prev) => ({ ...prev, password: text }))}
      />
      <CustomButton isLoading={isSubmitting} title="Sign In" onPress={() => submit()} />
      <View className="flex justify-center flex-row gap-2">
        <Text className="base-regular text-gray-100">
          Don't have an account?{" "}
          <Link className="base-bold text-primary" href="/signup">
            Sign Up
          </Link>
        </Text>
      </View>
    </View>
  );
}
