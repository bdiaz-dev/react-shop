import { useShoppingCart } from "../stores/shoppingCartStore"


export function ProductCard({ product, isOnCart = false, quantity }) {
	const { setCartProducts, setLatest } = useShoppingCart()

	const handleClick = (product) => {
		setCartProducts({ product, sum: 1 })
		setLatest(product)
	}
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
					? <><strong>
						<button onClick={() => setCartProducts({ product, sum: 1 })}>(+)</button>
						{` Quantity: [ ${quantity} ] `}
						<button onClick={() => setCartProducts({ product, sum: -1 })}>(-)</button>
					</strong></>
					: <button onClick={() => handleClick(product)}>Buy</button>
			}
		</div>
	)
}