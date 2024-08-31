import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Footer from './components/Footer'
import { store } from './store'

import Rotas from './routes'
import Checkout from './components/Checkout'
import Cart from './components/Cart'
import { EstiloGlobal } from './styles'
import Payment from './components/Payment'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <EstiloGlobal />
        <Rotas />
        <Footer />
        <Cart />
        <Checkout />
        <Payment />
      </BrowserRouter>
    </Provider>
  )
}

export default App
