// src/pages/Login.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/useTheme';
import { login } from '../../utils/auth';


const Login = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const [form, setForm] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const role = login(form.username, form.password);
        if (role) {
            navigate('/');
        } else {
            setError('Invalid credentials');
        }
    };

    const containerStyles: Record<typeof theme, string> = {
        light: 'bg-white text-gray-900',
        dark: 'bg-gray-900 text-white',
        colorful: 'bg-gradient-to-br from-yellow-100 to-pink-100 text-pink-900',
    };

    return (
        <div className={`min-h-screen flex items-center justify-center ${containerStyles[theme]}`}>
            <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-sm space-y-4"
            >
                <h2 className="text-xl font-bold text-center">Login</h2>
                <input
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    placeholder="Username"
                    className="w-full p-2 rounded border border-gray-300"
                />
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full p-2 rounded border border-gray-300"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
