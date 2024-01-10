import { useState } from "react"
import { useShoppingCart } from "../stores/shoppingCartStore"
import { useEffect } from "react"
import '../styles/ProductCard.scss'
import minus from '../assets/minus.svg'
import add from '../assets/add.svg'

export function ProductCard ({ product, isOnCart = false, quantity }) {
  const { cartProducts, setCartProducts, setLatest } = useShoppingCart()
  const [addedToCart, setAddedToCart] = useState(false)

  const handleClick = (product) => {
    setCartProducts({ product, sum: 1 })
    setLatest(product)
  }

  const handleCartProduct = () => {
    if (cartProducts.findIndex((item) => item.id === product.id) >= 0) { setAddedToCart(true) } else { setAddedToCart(false) }
  }

  useEffect(handleCartProduct, [cartProducts, product.id])

  return (
    <div
      key={product.id}
      className='productCard'
    >
      <div className='thumbnailContainer'>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <strong>{product.title}</strong>
      <strong>${product.price}</strong>


      {
        isOnCart
          ? <>
            <strong className='quantity'>
              <img src={add} onClick={() => setCartProducts({ product, sum: 1 })}></img>
              {` Quantity: [ ${quantity} ] `}
              <img src={minus} onClick={() => setCartProducts({ product, sum: -1 })}></img>
            </strong>
          </>
          :
          <>
            {addedToCart && <strong className="onCartAdvice">On shopping cart</strong>}
            <button onClick={() => handleClick(product)}>{addedToCart ? 'Add 1 more' : 'Buy'}</button>
          </>
      }
    </div>
  )
}