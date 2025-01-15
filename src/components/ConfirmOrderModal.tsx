import React from "react";
import { useCart } from "../contexts/CartContext";
import CartTotal from "./CartTotal";

interface ConfirmOrderModalProps {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ConfirmOrderModal({
    isModalOpen,
    setIsModalOpen,
}: ConfirmOrderModalProps) {
    const { cartItems, clearCart } = useCart();

    const items = cartItems.map((cart, index) => {
        const total = cart.price * cart.quantity;

        return (
            <div className="flex flex-col gap-4" key={index}>
                <div className="flex gap-2">
                    <div className="flex-1 flex gap-4">
                        <img
                            src={cart.image}
                            alt={`image of ${cart.name}`}
                            className="rounded-[4px] w-[48px] h-[48px] object-center"
                        />
                        <div className="flex flex-col gap-2">
                            <div className="font-semibold text-[14px] text-rose-900 line-clamp-1">
                                {cart.name}
                            </div>
                            <div className="flex gap-2">
                                <div className="min-w-[21px] text-red text-[14px] font-semibold">
                                    {cart.quantity}x
                                </div>
                                <div className="text-rose-500 text-[14px]">
                                    @ ${cart.price.toFixed(2)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="font-semibold text-rose-900">${total.toFixed(2)}</div>
                </div>
                <div className="border-b-[1px] border-rose-100"></div>
            </div>
        );
    });

    return (
        <div
            className={`
                h-full w-full
                fixed  top-0 left-0 
                backdrop-brightness-50 
                transition-opacity duration-300 
                flex items-end
                ${isModalOpen ? "opacity-100 z-50" : "opacity-0 -z-10"}
            `}
            onClick={() => setIsModalOpen(false)}
        >
            <div
                className={`
                    max-h-[85%] h-auto w-full 
                    py-10 px-6 
                    flex flex-col gap-8 
                    bg-white
                    rounded-t-[12px] overflow-scroll 
                    transform transition-transform duration-500 
                    ${isModalOpen ? "translate-y-0" : "translate-y-full"}
                `}
                onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
            >
                {/* Header */}
                <div className="flex flex-col gap-6">
                    <img
                        className="w-[48px] h-[48px]"
                        src="./assets/images/icon-order-confirmed.svg"
                        alt="check icon"
                    />
                    <div className="flex flex-col gap-2">
                        <div className="font-bold text-rose-900 text-[40px] leading-[120%]">
                            Order Confirmed
                        </div>
                        <div className="text-rose-500">We hope you enjoy your food!</div>
                    </div>
                </div>

                {/* Items */}
                <div className="p-6 bg-rose-50 flex flex-col gap-4 rounded-[8px]">
                    {items}
                    <CartTotal />
                </div>

                {/* Button */}
                <div
                    className="bg-red flex items-center justify-center w-full py-4 rounded-full"
                    onClick={() => {
                        setIsModalOpen(false);
                        clearCart();
                    }}
                >
                    <div className="font-semibold text-[16px] text-white">Start New Order</div>
                </div>
            </div>
        </div>
    );
}
