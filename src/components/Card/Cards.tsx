// src/components/Card.tsx
import React from 'react';
import { useTheme } from '../../context/useTheme';

interface CardProps {
    title: string;
    price?: number;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, price, children }) => {
    const { theme } = useTheme();

    const cardStyles: Record<typeof theme, string> = {
        light: 'bg-white text-gray-800 border border-gray-200 shadow-md font-sans p-4 rounded-lg',
        dark: 'bg-gray-800 text-white border border-gray-700 shadow-lg font-serif p-5 rounded-lg',
        colorful: 'bg-gradient-to-br from-pink-100 to-yellow-100 text-pink-900 shadow-xl font-[Pacifico] p-6 rounded-xl',
    };

    return (
        <div
            className={`w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto transition-all duration-300 ${cardStyles[theme]}`}
        >
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            {price && <p className="mb-3 text-sm">{price}</p>}
            {children}
        </div>
    );
};

export default Card;
