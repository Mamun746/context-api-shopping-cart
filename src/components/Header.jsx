import { useCart } from "../context/CartContext";
import { useState } from "react";
import {FaShoppingCart} from 'react-icons/fa'
const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cart,removeFromCart } = useCart();
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    return ( 
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">ShopMate</h1>
            <div className="flex items-center pr-4">
                <button className="cursor-pointer" onClick={()=>setIsCartOpen(!isCartOpen)}>
                    <FaShoppingCart className="text-2xl text-gray-700" />
                {
                    itemCount > 0 && (
                        <span className="absolute top-3 right-4 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                            {itemCount}
                        </span>
                    )
                }
                </button>
                {isCartOpen && (
                    <div className="absolute right-4 mt-100 w-64 bg-white border rounded shadow-lg z-50">
                        <div className="p-4">
                            <h2 className="font-semibold text-lg mb-2">Cart Items</h2>
                            {cart.length === 0 ? (
                                <p className="text-gray-500 text-sm">Your cart is empty.</p>
                            ) : (
                                <>
                                <ul className="max-h-60 overflow-y-auto divide-y divide-grey-200">
                                    {
                                        cart.map((item) => (
                                            <li key={item.id} className="py-2 flex justify-between items-center">
                                                <div>   
                                                    <p className="font-semibold">{item.name}</p>
                                                    <p className="text-sm text-gray-500">{item.quantity} x ${item.price.toFixed(2)}</p>
                                                </div>
                                                <button onClick={()=>removeFromCart(item)} className="text-red-500 text-sm cursor-pointer">Remove</button>
                                               
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="mt-4 flex justify-between font-semibold">
                                    <p className="font-semibold">Total: ${totalPrice}</p>
                                </div>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </header>
     );
}
 
export default Header;