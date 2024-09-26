import { useEffect, useState } from 'react'
import { useFiltersStore } from '../stores/filtersStore'

export function useProducts() {
    const { startPrice, category } = useFiltersStore()
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsFetch = await fetch('https://dummyjson.com/products')
                const res = await productsFetch.json()
                
                const filteredProducts = res.products.filter((product) => (
                    product.price >= startPrice &&
                    (
                        category === 'all' ||
                        product.category === category
                    )
                ))
                
                setProducts(filteredProducts)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }

        fetchProducts()
    }, [startPrice, category])

    return { products }
}
