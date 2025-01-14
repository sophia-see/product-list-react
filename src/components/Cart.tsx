import { useCart } from "../contexts/CartContext";

export default function Cart () {
    const { cartItems } = useCart();

    console.log({cartItems})

    const emptyCart = (
        <div
            className="
                flex flex-col gap-4 items-center justify-center
                p-4
            "
        >
            <img src="./assets/images/illustration-empty-cart.svg" alt="illustration of cake" />
            <div
                className="
                    font-semibold text-rose-500 text-[14px] text-center
                "
            >
                Your added items will appear here
            </div>
        </div>
    );

    const renderCartList = cartItems.map((cart, index) => {
        return (
            <div
                key={index}
            >

            </div>
        )
    })

    return (
        <div
            className="
                bg-white rounded-[12px]
                flex flex-col gap-6
                max-w-[327px] w-full
                p-6 m-auto
            "
        >
            <div
                className="
                    font-bold text-[24px] text-red
                "
            >
                Your Cart (0)
            </div>
            {cartItems.length 
                ? renderCartList
                : emptyCart
            }
        </div>
    )
}