import { useShoppingCart } from "../stores/shoppingCartStore"
import { ProductCard } from "./ProductCard"
import '../styles/ShoppingCart.css'

export function ShoppingCart() {

    const closeCart = () => {
        const shoppingCart = document.querySelector('.shoppingCart')
        shoppingCart.style.right = '-320px'
    }

    const { cartProducts, totalCart, setClear } = useShoppingCart()
    return (
        <aside className="shoppingCart">
            <div className="cartButton" onClick={closeCart}>
                <i className="icon fa-solid fa-xmark"></i>
            </div>
            <h2>Sopping Cart</h2>
            <p>total: ${totalCart}</p>
            <button onClick={setClear}>Clear Cart</button>
            <ul>
                {cartProducts.map((product) => (
                    <li
                        key={product.id}
                    >
                        <ProductCard
                            product={product}
                            isOnCart={true}
                            quantity={product.quantity}
                        />
                    </li>
                ))}
            </ul>
        </aside>
    )
}