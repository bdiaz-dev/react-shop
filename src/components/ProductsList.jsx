import { useEffect } from 'react'
import { useProducts } from '../hooks/useProducts'
import { ProductCard } from './ProductCard'



export function ProductsList () {
  const { products } = useProducts()
  useEffect(() => {
    console.log(products)
  }, [products])
  // console.log(products)

  return (
    <section className='productsList'>
      {
        products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <p>No products available.</p>
        )
      }
    </section>
  )
}