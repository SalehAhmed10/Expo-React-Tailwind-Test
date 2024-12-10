import { styled } from 'nativewind';
import { Text as RNText, TouchableOpacity as RNTouchableOpacity } from 'react-native';
import { useTheme } from '@/context/ThemeProvider';

const TouchableOpacity = styled(RNTouchableOpacity);
const Text = styled(RNText);

interface ButtonProps {
    onPress: () => void;
    title: string;
}

export default function Button({ onPress, title }: ButtonProps) {
    const { theme } = useTheme();

    return (
        <TouchableOpacity
            onPress={onPress}
            className={`${theme === 'dark' ? 'bg-dark-primary' : 'bg-light-primary'
                } px-4 py-3 rounded-lg items-center`}
        >
            <Text className={`${theme === 'dark' ? 'text-light-text-primary' : 'text-dark-text-primary'
                } font-medium`}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}