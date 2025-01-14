import { useCart } from "../contexts/CartContext";
import data from "../data.json";
import AddToCartButton from "./AddToCartButton";
import ProductQuantityButton from "./ProductQuantityButton";

export type Product = {
    image: {
        thumbnail: string;
        desktop: string;
        tablet: string;
        mobile: string;
    };
    name: string;
    category: string;
    price: number;
}
export default function Products () {
    const { cartItems, addToCart } = useCart();

    const handleUpdateCart = (item: Product, quantity?: number) => {
        addToCart(item, quantity);
    };

    const renderProducts = data.map((product: Product, index) => {
        const itemInCart = cartItems.find(i => i.name == product.name);

        return (
            <div 
                className="
                    flex flex-col gap-4
                    m-auto
                    max-w-[327px] 
                "
                key={index}
            >
                {/* picture w/ button*/}
                <div
                    className="
                        relative
                        w-full
                        h-[234px]
                    "
                >
                    <img 
                        src={product.image.mobile} 
                        alt={`image of ${product.name}`} 
                        className={`
                            w-full h-[212px]
                            object-center
                            rounded-[8px]
                            ${itemInCart ? "border-[2px] border-red" : ""}
                        `}
                    />
                    {itemInCart 
                        ?   <ProductQuantityButton 
                                product={product} 
                                quantity={itemInCart.quantity}
                                handleUpdateCart={handleUpdateCart}
                            />
                        :   <AddToCartButton 
                                product={product} 
                                handleUpdateCart={handleUpdateCart}
                            />
                    }
                    
                </div>

                {/* texts */}
                <div
                    className="
                        flex flex-col gap-1
                    "
                >
                    <div
                        className="
                            text-[14px] text-rose-500
                        "
                    >
                        {product.category}
                    </div>
                    <div
                        className="
                            font-semibold
                            text-[16px] text-rose-900
                        "
                    >
                        {product.name}
                    </div>
                    <div
                        className="
                            font-semibold
                            text-[16px] text-red
                        "
                    >
                        ${product.price.toFixed(2)}
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div 
            className="
            flex flex-col gap-6
            "
        >
            {renderProducts}
        </div>
    )
}