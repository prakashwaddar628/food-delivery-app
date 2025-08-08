import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function SignUp() {
  return (
    <View>
      <Text>SignUp</Text>
      <Button title='Sign Up' onPress={() => router.push('/signin')} />

    </View>
  )
}