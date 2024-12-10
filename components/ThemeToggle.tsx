import { styled } from 'nativewind';
import { Pressable as RNPressable } from 'react-native';
import { useTheme } from '@/context/ThemeProvider';
import { Feather } from '@expo/vector-icons';

const Pressable = styled(RNPressable);

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Pressable
            onPress={toggleTheme}
            className={`p-3 rounded-full ${theme === 'light' ? 'bg-light-surface' : 'bg-dark-surface'
                }`}
        >
            <Feather
                name={theme === 'light' ? 'sun' : 'moon'}
                size={24}
                color={theme === 'light' ? '#1a1a1a' : '#ffffff'}
            />
        </Pressable>
    );
}