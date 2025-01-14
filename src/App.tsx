import Cart from "./components/Cart"
import Header from "./components/Header"
import Products from "./components/Products"

function App() {

  return (
    <div 
      className="
        font-sans bg-rose-50 
        flex flex-col gap-8
        p-6
        h-[100%] min-h-screen
      "
    >
      <Header />
      <Products/>
      <Cart />
    </div>

  )
}

export default App
