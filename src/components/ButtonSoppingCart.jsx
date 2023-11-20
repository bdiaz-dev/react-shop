

export function ButtonShoppingCart() {

    const openCart = () => {
        const shoppingCart = document.querySelector('.shoppingCart')
        shoppingCart.style.right = '0'
    }

    return (
        <div className="openCartButton" onClick={openCart}>
            <i className="fa-solid fa-cart-shopping"></i>
        </div>
    )
}