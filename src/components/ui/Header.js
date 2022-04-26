import './styles.css'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to="/restuarant-website"><img src={logo} alt={logo} /> </Link>
      <ul className='links'>
        <Link to="/restuarant-website"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/products"><li>Products</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
    </header>
  )
}

export default Header