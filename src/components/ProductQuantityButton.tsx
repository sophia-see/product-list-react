import { Product } from "./Products";

interface ProductQuantityButtonProps {
    product: Product;
    quantity: number;
    handleUpdateCart: (item: Product, qty?: number) => void
}
export default function ProductQuantityButton ({product, quantity, handleUpdateCart}: ProductQuantityButtonProps) {
    const handleClickButton = (type: string) => {
        const qty = type == "increment" ? 1 : -1;

        handleUpdateCart(product, qty);
    }

    const renderButton = (type: string) => {
        return (
            <div
                className="
                    flex items-center justify-center
                    px-[3.75px]
                    rounded-full
                    border-[1px] border-white
                    w-[20px] h-[20px]
                    cursor-pointer
                "
                onClick={() => handleClickButton(type)}
                key={type}
            >
                <img
                    src={`./assets/images/icon-${type}-quantity.svg`} 
                    alt={`${type} icon`}
                />
            </div>
        )
    }
    
    return (
        <div 
            className="
                absolute bottom-0 left-1/2 transform -translate-x-1/2
                flex gap-2 items-center justify-between
                bg-red text-white
                w-[160px] h-[44px] p-3
                border-[1px] border-rose-400 rounded-full

            "
        >
            {renderButton("decrement")}
            <div 
                className="
                    font-semibold text-[14px]
                "
            >
                {quantity}
            </div>
            {renderButton("increment")}
        </div>
    )
}