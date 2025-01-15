import { useCart } from "../contexts/CartContext";
import CartTotal from "./CartTotal";
import RemoveIcon from "./RemoveIcon";

interface CartProps {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Cart ({setIsModalOpen}: CartProps) {
    const { cartItems, removeFromCart } = useCart();

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
        const total = cart.price * cart.quantity;

        return (
            <div
                className="
                    flex flex-col gap-4
                "
            >
                <div
                    key={index}
                    className="
                        flex justify-between items-center
                    "
                >
                    {/* texts */}
                    <div
                        className="
                            flex flex-col gap-2
                        "
                    >
                        <div
                            className="
                                font-semibold text-[14px] text-rose-900
                            "
                        >
                            {cart.name}
                        </div>
                        <div
                            className="
                                flex gap-2
                            "
                        >
                            <div
                                className="
                                min-w-[21px]
                                text-red text-[14px]
                                font-semibold
                                "
                            >
                                {cart.quantity}x
                            </div>
                            <div
                                className="
                                text-rose-500 text-[14px]
                                "
                            >
                                @ ${cart.price.toFixed(2)}
                            </div>
                            <div
                                className="
                                text-rose-500 text-[14px] font-semibold
                                "
                            >
                                ${total.toFixed(2)}
                            </div>
                        </div>
                    </div>

                    {/* close buttons */}
                    <div
                        onClick={() => removeFromCart(cart.name)}
                    >
                        <RemoveIcon />
                    </div>
                </div>
                <div
                    className="
                        border-b-[1px] border-rose-100
                    "
                >
                </div>
            </div>
        )
    });

    const carbonBanner = (
        <div
            className="
                w-full bg-rose-50
                flex justify-center gap-2
                rounded-[8px]
                py-4
            "
        >
            <img src="./assets/images/icon-carbon-neutral.svg" alt="tree icon" />
            <div
                className="
                    text-rose-900 text-[14px]
                "
            >
                This is a{" "}
                <span
                    className="
                        font-semibold
                    "
                >
                    carbon-neutral
                </span>
            </div>
        </div>
    )

    const confirmOrderButton = (
        <div
            className="
                bg-red hover:bg-dark-red
                flex items-center justify-center
                w-full
                py-4
                rounded-full
                cursor-pointer
            "
            onClick={() => setIsModalOpen(true)}
        >
            <div
                className="
                    font-semibold text-[16px] text-white
                "
            >
                Confirm Order
            </div>
        </div>
    )

    return (
        <>
            <div
                className="
                    bg-white rounded-[12px]
                    flex flex-col gap-6
                    max-w-[327px] w-full md:max-w-none lg:max-w-[384px]
                    p-6 m-auto lg:m-0
                "
            >
                <div
                    className="
                        font-bold text-[24px] text-red
                    "
                >
                    Your Cart ({cartItems.length})
                </div>
                {cartItems.length 
                    ? <>
                        {renderCartList}
                        <CartTotal />
                        {carbonBanner}
                        {confirmOrderButton}
                    </>
                    : emptyCart
                }
            </div>
        </>

    )
}