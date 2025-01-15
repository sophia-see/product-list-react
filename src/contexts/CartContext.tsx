import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../components/Products';

export type CartItem = {
    name: string;
    price: number;
    quantity: number;
    image: string;
}

// Define the context type
interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: Product, qty?: number) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (item: Product, qty?: number) => {
        const itemInCart = cartItems.find(i => i.name == item.name);
        
        if (itemInCart) {
            const newItems = cartItems.map((i) => {
                const newQuant = i.quantity + (qty ? qty : 1);
                if (i.name == item.name)
                    return {
                        ...i,
                        quantity: newQuant
                    }
                else return i;
            });

            const filterItems = newItems.filter(i => i.quantity);
            
            setCartItems(filterItems);
        } else {
            setCartItems((prevItems) => [...prevItems, {
                name: item.name,
                price: item.price,
                quantity: 1,
                image: item.image.thumbnail
            }]);
        }
    };

    const removeFromCart = (name: string) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.name !== name));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};