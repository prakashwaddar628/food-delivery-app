import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import { router } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function SignIn() {
  return (
    <View className='gap-10 bg-white rounded-lg p-5 mt-5'>
      <Text>sign-in</Text>
      <Button title='Sign In' onPress={() => router.push('/signup')} />

        <CustomInput
        placeholder="enter your username (@email.com)"
        label="Username"
        keyboardType="email-address"
        value=""
        onChangeText={(text) => {}}
        />
        <CustomButton title="Sign In" onPress={() => {}} />
    </View>
  )
}