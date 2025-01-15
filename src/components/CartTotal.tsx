import { useCart } from "../contexts/CartContext";


export default function CartTotal () {
    const { cartItems } = useCart();
    const totalPrice = cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

    return (
        <div
        className="
            flex justify-between items-center
        "
    >
        <div
            className="
                text-rose-900 text-[14px]
            "
        >
            Order Total
        </div>
        <div
            className="
                text-rose-900 text-[24px] font-bold
            "
        >
            ${totalPrice.toFixed(2)}
        </div>
    </div>
    )
}