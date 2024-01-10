
import { create } from "zustand";

const localStorageArray = (window.localStorage.shoppingCart)
  ? [...JSON.parse(window.localStorage.getItem('shoppingCart'))]
  : []

let totalCart = 0
for (let i = 0; i < localStorageArray.length; i++) {
  totalCart += (localStorageArray[i].price * localStorageArray[i].quantity);
}

export const useShoppingCart = create((set) => ({
  cartProducts: localStorageArray,
  latestProduct: '',
  totalCart: totalCart,
  setClear: () => set(() => {
    window.localStorage.setItem('shoppingCart', JSON.stringify([]))
    return ({ cartProducts: [], totalCart: 0 })
  }),
  setLatest: (product) => set(() => ({ latestProduct: product.title })),
  setQuantity: ({ more, product }) => set(() => ({ totalCart: (more ? product : product) })),
  setCartProducts: ({ product, sum }) => set((state) => {
    const productIndex = state.cartProducts.findIndex((item) => (item.id === product.id))

    if (productIndex >= 0) {
      state.cartProducts[productIndex].quantity += sum
      state.totalCart += (sum * product.price)
      if (state.cartProducts[productIndex].quantity <= 0) {
        state.cartProducts.splice(productIndex, 1)
      }
      window.localStorage.setItem('shoppingCart', JSON.stringify(state.cartProducts))
      return ({
        cartProducts: state.cartProducts,
        totalCart: state.totalCart
      })
    }

    // if (state.cartProducts[productIndex].quantity <= 0)
    window.localStorage.setItem('shoppingCart', JSON.stringify([{ ...product, quantity: 1 }, ...state.cartProducts]))
    return ({
      cartProducts: [{ ...product, quantity: 1 }, ...state.cartProducts],
      totalCart: state.totalCart += (sum * product.price)
    })
  })
}))