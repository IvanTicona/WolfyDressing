
import './App.css'
import { Home } from './pages/Home'

function App() {

  return (
    <>
      <h1 className='text-3xl font-bold underline'>Wolfy Dressing Website</h1>
      
      {/* RUTAS 
      
      <Route path='/' component={Home} />
      <Route path='/cart' component={Cart} />
      <Route path='/product' component={Product} />
      <Route path='/contact' component={Contact} />
      <Route path='/search' component={Search} />

      */}
      <Home />
    </>
  )
}

export default App
