import { useCart } from '../context/CartContext';
const ProductCard = ({product}) => {
    const { addToCart } = useCart();

    return ( <div key={product.id} className='bg-white rounded shadow p-4 flex flex-col '>
            <img src={product.image} alt={product.name} className='h-40 object-cover mb-4 rounded' />
            <h2 className='text-xl font-semibold'>{product.name}</h2>
            <p className='text-gray-500 text-sm mb-2'>{product.description}</p>
            <p className='text-lg font-bold'>${product?.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)} className="bg-blue-600 text-white mt-3 px-4 py-2 rounded transition hover:bg-blue-700 cursor-pointer">Add To Cart</button>
          </div> );
}
 
export default ProductCard;