import { styled } from 'nativewind';

import { ThemeToggle } from '@/components/ThemeToggle';
import { useTheme } from '@/context/ThemeProvider';
import Button from '@/components/Button';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';



export default function App() {
    const { theme } = useTheme();

    return (
        <SafeAreaView className="flex-1">
            <View
                className={`flex-1  px-4 ${theme === 'light' ? 'bg-light-background' : 'bg-dark-background'
                    }`}
            >
                <View className="flex-1 gap-5  py-8 justify-center items-center">
                    <View className="items-center">
                        <ThemeToggle />
                    </View>

                    <View className="gap-4 ">
                        <Button
                            onPress={() => router.push('/not-found' as any)}
                            title="Go to not found Button"
                        />
                    </View>
                </View>
            </View>
            <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
        </SafeAreaView>
    );
}