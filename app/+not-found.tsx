import { Link, router, Stack } from 'expo-router';
import { SafeAreaView, SafeAreaViewBase, Text, View } from 'react-native';
import { useTheme } from '@/context/ThemeProvider';
import Button from '@/components/Button';

export default function NotFoundScreen() {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View
        className={`flex-1 p-4 items-center justify-center ${theme === 'light' ? 'bg-light-background' : 'bg-dark-background'
          }`}
      >
        <Text
          className={`text-xl font-bold mb-2 ${theme === 'light' ? 'text-light-text-primary' : 'text-dark-text-primary'
            }`}
        >
          This screen doesn't exist.
        </Text>

        <Text
          className={`mb-6 text-center ${theme === 'light' ? 'text-light-text-secondary' : 'text-dark-text-secondary'
            }`}
        >
          The page you're looking for cannot be found. It might have been removed or you might have typed the wrong URL.
        </Text>

    
          <Button
            title="Go back home"
            onPress={() => {
              router.push('/')
             }}

          />
       
      </View>
    </SafeAreaView >
  );
}