import React from "react";
import Cart from "./components/Cart"
import Header from "./components/Header"
import Products from "./components/Products"
import { CartProvider } from "./contexts/CartContext"
import ConfirmOrderModal from "./components/ConfirmOrderModal";

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  
  React.useEffect(() => {
    if (isModalOpen) {
        document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
        document.body.style.overflow = ""; // Restore scrolling
    }

    // Cleanup on unmount
    return () => {
        document.body.style.overflow = "";
    };
}, [isModalOpen]);

  return (
    <CartProvider>
      <div 
        className={`
          font-sans bg-rose-50 
          flex flex-col gap-8 lg:flex-row lg:items-start
          p-6 md:p-10 lg:py-[88px] lg:px-[112px]
          h-[100%] min-h-screen
        `}
      >
        <div
          className={`
            flex flex-col gap-8
          `}
        >
          <Header />
          <Products/>
        </div>
        <Cart setIsModalOpen={setIsModalOpen}/>
        
        <ConfirmOrderModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      </div>   
    </CartProvider>


  )
}

export default App
