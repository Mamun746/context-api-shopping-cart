import ProductCard from './ProductCard';
import { useContext } from 'react';
import { useProduct } from '../context/ProductContext';
const ProductList = () => {
  const { products, loading, error } = useProduct();
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {loading && <p>Loading products...</p>}
      {error && <p className='text-red-500'>{error}</p>}
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
 
export default ProductList;