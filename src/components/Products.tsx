import data from "../data.json";
export default function Products () {
    const renderProducts = data.map((product, index) => {
        return (
            <div 
                className="
                    flex flex-col gap-4
                    m-auto
                    max-w-[327px] 
                "
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
                        className="
                            w-full h-[212px]
                            object-center
                        "
                    />
                    <div 
                        className="
                            absolute bottom-0 left-1/2 transform -translate-x-1/2
                            flex gap-2 items-center justify-center
                            bg-white
                            w-[160px] h-[44px]
                            border-[1px] border-rose-400 rounded-full
                        "
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