import { useTheme } from "../../context/useTheme";

// src/pages/Contact.tsx
const Contact = () => {
    const { theme } = useTheme();

    const containerStyles: Record<typeof theme, string> = {
        light: 'bg-gray-100 text-gray-900 font-sans',
        dark: 'bg-gray-900 text-white font-serif',
        colorful: 'bg-gradient-to-br from-yellow-100 to-pink-100 text-pink-900 font-[Pacifico]',
    };

    return (
        <div className={`min-h-screen pt-24 px-6 transition-all duration-500 ${containerStyles[theme]}`}>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2">📧 Email: parikshitpatil987@gmail.com</p>
            <p className="mb-2">📧 Mobile: +91-8485868079</p>
            <p>📍 Location: Pune, Maharashtra</p>
        </div>
    );
};

export default Contact;
