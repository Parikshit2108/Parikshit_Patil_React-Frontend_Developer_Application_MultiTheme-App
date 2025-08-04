
import { useTheme } from "../../context/useTheme";

const About = () => {
    const { theme } = useTheme();

    const containerStyles: Record<typeof theme, string> = {
        light: 'bg-gray-100 text-gray-900 font-sans',
        dark: 'bg-gray-900 text-white font-serif',
        colorful: 'bg-gradient-to-br from-yellow-100 to-pink-100 text-pink-900 font-[Pacifico]',
    };

    return (
        <div className={`min-h-screen pt-24 px-6 transition-all duration-500 ${containerStyles[theme]}`}>
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="max-w-2xl">
                We are a team of passionate developers building delightful UI experiences. This app is themed
                using Context API and Tailwind CSS to demonstrate a flexible design system across multiple layouts.
            </p>
        </div>
    );
};

export default About;
