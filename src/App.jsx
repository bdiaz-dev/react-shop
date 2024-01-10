import './styles/App.scss'
import { AddedNotify } from './components/AddedNotify'
import { ButtonShoppingCart } from './components/ButtonSoppingCart'
import { Filters } from './components/Filters'
import { ProductsList } from './components/ProductsList'
import { ShoppingCart } from './components/ShoppingCart'
import { BrunoDiazSign } from './components/BrunoDiazSign'

function App () {

  return (
    <>
      <header>
        <div className='title'>
          <h1>React Shop</h1>
          <h2>Your Web-Shop for everything</h2>
        </div>
        <Filters />
        <ButtonShoppingCart />
      </header>
      <main>
        <AddedNotify />
        <ProductsList />
        <ShoppingCart />
        <BrunoDiazSign />
      </main>
    </>
  )
}

export default App
