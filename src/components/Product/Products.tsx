import React, { useEffect, useState } from 'react';
import { get } from '../../api/methods';
import Card from '../Card/Cards';
import { useTheme } from '../../context/useTheme';

interface Product {
    id: number;
    title: string;
    price: number;
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const { theme } = useTheme();

    const getProducts = async () => {
        const res = await get<Product[]>('/products');
        if (res) {
            setProducts(res);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    // Theme-specific wrapper classes
    const wrapperClasses: Record<typeof theme, string> = {
        light: 'bg-gray-100 font-sans p-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        dark: 'bg-gray-900 font-serif p-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        colorful:
            'bg-gradient-to-br from-yellow-100 to-pink-100 font-[Pacifico] p-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    };

    return (
        <div className={`min-h-screen pt-24 px-4 ${wrapperClasses[theme]}`}>
            {products.map((ele) => (
                <Card key={ele.id} title={ele.title} price={ele.price} />
            ))}
        </div>
    );
};

export default Products;
