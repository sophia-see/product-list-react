import { useCart } from "../contexts/CartContext";
import data from "../data.json";
import useDeviceSize from "../hooks/useDeviceSize";
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
    const { isMobile, isTablet } = useDeviceSize();

    const handleUpdateCart = (item: Product, quantity?: number) => {
        addToCart(item, quantity);
    };

    const renderProducts = data.map((product: Product, index) => {
        const itemInCart = cartItems.find(i => i.name == product.name);
        const image = isMobile ? product.image.mobile : isTablet ? product.image.tablet : product.image.desktop;
        
        return (
            <div 
                className="
                    flex flex-col gap-4
                    m-auto md:m-0
                    max-w-[327px] md:max-w-[213px]
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
                        src={image} 
                        alt={`image of ${product.name}`} 
                        className={`
                            w-full h-[212px]
                            object-cover
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
            md:flex-row md:gap-x-6 md:gap-y-8 md:flex-wrap
            "
        >
            {renderProducts}
        </div>
    )
}