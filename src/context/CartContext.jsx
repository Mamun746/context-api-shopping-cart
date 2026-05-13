import {createContext, useState,useContext} from "react";

export const CartContext = createContext();

export const CartProvider=({ children })=>{
    const [cart, setCart] = useState([]);

    const addToCart=(product)=>{
        console.log(product);
        
        setCart((prev)=>{
            const existing=prev.find(item=>item.id===product.id);
            if(existing){
                return prev.map(item=>item.id===product.id ? {...item, quantity: item.quantity + 1} : item);
            }
            return [...prev, {...product, quantity: 1}];
        })

    }
    return(
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )

}


export function useCart(){
    return useContext(CartContext);
}