import './styles/App.css'
import { AddedNotify } from './components/AddedNotify'
import { ButtonShoppingCart } from './components/ButtonSoppingCart'
import { Filters } from './components/Filters'
import { ProductsList } from './components/ProductsList'
import { ShoppingCart } from './components/ShoppingCart'
import { BrunoDiazSign } from './components/BrunoDiazSign'

function App() {

  return (
    <>
      <header>
        <h1>React Shop</h1>
        <Filters />
      </header>
      <main>
        <AddedNotify />
        <ButtonShoppingCart />
        <ProductsList />
        <ShoppingCart />
        <BrunoDiazSign />
      </main>
    </>
  )
}

export default App
