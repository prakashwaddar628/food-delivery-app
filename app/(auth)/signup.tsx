import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { router, Link } from "expo-router";
import { useState } from "react";
import { View, Text } from "react-native";

export default function SignUp() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  
  const submit = async () =>{
    if (!form.name || !form.email || !form.password) {
      alert("Please fill in all fields");
      return;
    }
    setIsSubmitting(true);

    try{
      // call appwrite sign in function
      
      alert("Sign Up successful");
      router.replace("/");
    }catch(error){
      alert("Sign Up failed");
    }finally{
      setIsSubmitting(false);
    }
  }

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
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
        onChangeText={(text) => setForm((prev) => ({ ...prev, password: text }))}
      />
      <CustomButton isLoading={isSubmitting} title="Sign In" onPress={() => submit()} />
      <View className="flex justify-center flex-row gap-2">
        <Text className="base-regular text-gray-100">
          already have an account?{" "}
          <Link className="base-bold text-primary" href="/signin">
            Sign In
          </Link>
        </Text>
      </View>
    </View>
  );
}
