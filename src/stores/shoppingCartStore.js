import { create } from "zustand";

export const useShoppingCart = create((set) => ({
    cartProducts: [],
    latestProduct: '',
    totalCart: 0,
    setClear: () => set(() => ({cartProducts: [], totalCart: 0})),
    setLatest: (product) => set (() => ({latestProduct: product.title})),
    setQuantity: ({more, product}) => set (() => ({totalCart: (more? product :product) })),
    setCartProducts: ({product, sum}) => set((state) => {
        const productIndex = state.cartProducts.findIndex((item) => (item.id === product.id))

        if (productIndex >= 0) {
            state.cartProducts[productIndex].quantity  += sum
            state.totalCart +=  (sum*product.price)
            if (state.cartProducts[productIndex].quantity <= 0){
                state.cartProducts.splice(productIndex,1)
                console.log(state.cartProducts)
            }
            return({
                cartProducts: state.cartProducts,
                totalCart: state.totalCart
            })
        }

       // if (state.cartProducts[productIndex].quantity <= 0)

        return({
            cartProducts: [{...product, quantity:1},...state.cartProducts],
            totalCart: state.totalCart +=  (sum*product.price)
        })
    })
}))