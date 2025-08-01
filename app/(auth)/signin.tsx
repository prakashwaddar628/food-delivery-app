import { router } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function SignIn() {
  return (
    <View>
      <Text>sign-in</Text>
      <Button title='Sign In' onPress={() => router.push('/signup')} />
    </View>
  )
}