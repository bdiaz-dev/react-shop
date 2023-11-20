import { useProducts } from '../hooks/useProducts'
import { ProductCard } from './ProductCard'



export function ProductsList () {
    const { products } = useProducts()

    return(
        <section className='productsList'>
          {
            products.map((product) => {
              return (
                <ProductCard 
                key={product.id} 
                product={product}
                />
              )
            })
          }
        </section>
    )
}