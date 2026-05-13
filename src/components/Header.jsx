import { useCart } from "../context/CartContext";
import {FaShoppingCart} from 'react-icons/fa'
const Header = () => {
    const { cart } = useCart();
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    return ( 
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">ShopMate</h1>
            <div className="flex items-center">
                <FaShoppingCart className="text-2xl text-gray-700" />
                {
                    itemCount > 0 && (
                        <span className="absolute top-3 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                            {itemCount}
                        </span>
                    )
                }
            </div>
        </header>
     );
}
 
export default Header;