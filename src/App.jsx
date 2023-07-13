import PRouter from './PRouter'
import { CartContext } from './CartContext'

function App() {

  return (
    <CartContext>
      <PRouter/>
    </CartContext>
  )
}

export default App


