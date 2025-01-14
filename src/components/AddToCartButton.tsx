import { Product } from "./Products"

interface AddToCartButtonProps {
    product: Product;
    handleUpdateCart: (item: Product, qty?: number) => void
}

export default function AddToCartButton ({product, handleUpdateCart}: AddToCartButtonProps) {
    return (
        <div 
            className="
                absolute bottom-0 left-1/2 transform -translate-x-1/2
                flex gap-2 items-center justify-center
                bg-white
                w-[160px] h-[44px]
                border-[1px] border-rose-400 rounded-full
            "
            onClick={() => handleUpdateCart(product)}
        >
            <img 
                className="
                    fill-red
                "
                src="./assets/images/icon-add-to-cart.svg" 
                alt="shopping cart icon" 
            />
            <div 
                className="
                    font-semibold text-[14px]
                "
            >
                Add to Cart
            </div>
        </div>
    )
}