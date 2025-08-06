import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { images } from "@/constants";
import { Slot } from "expo-router";
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View
} from "react-native";

export default function _layout() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        className="bg-white h-full"
        keyboardShouldPersistTaps="handled"
      >
        <View
          className="w-full relative"
          style={{ height: Dimensions.get("window").height / 2.25 }}
        >
          <ImageBackground source={images.loginGraphic}
          className="size-full rounded-b-lg" resizeMode="stretch"/>
          <Image source={images.logo}
          className="size-48 absolute -bottom-16 z-10 self-center"/>
        </View>
        <CustomInput
        placeholder="enter your username (@email.com)"
        label="Username"
        keyboardType="email-address"
        value=""
        onChangeText={(text) => {}}
        />
        <CustomButton />
      </ScrollView>
      <Slot />
    </KeyboardAvoidingView>
  );
}
