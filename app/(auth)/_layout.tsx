import { Slot } from 'expo-router';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function _layout() {
  return (
    <SafeAreaView>
      <Text>Auth layout</Text>
      <Slot />
    </SafeAreaView>
  )
}