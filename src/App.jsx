import Cards from './components/Cards'
import Footer from './components/Footer'
import Marquee from './components/Marquees'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Stripes from './components/Stripes'
import Work from './components/Work'
const App = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-900">
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquee/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App