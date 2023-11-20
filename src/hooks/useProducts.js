import productsJson from '../mocks/products.json'
import { useFiltersStore } from '../stores/filtersStore'

export function useProducts() {
    const { startPrice, category } = useFiltersStore()
    const { products } = productsJson
    
    const filteredProducts = products.filter((product) => (
        product.price >= startPrice &&
        (
            category === 'all' ||
            product.category === category
        )
    ))
    
    return {products: filteredProducts}
}
