import {IoCartOutline} from 'react-icons/io5'
import './index.css'

const Navbar = props => {
  const {data, cartCount} = props
  // console.log(cartCount)
  const one = data[0]
  return (
    <div className="navContainer">
      <h1 className="headingElement">{one.restaurant_name}</h1>

      <div className="secondContainer">
        <p className="orderElement">My Orders</p>
        <IoCartOutline className="icon" />
        <div className="cartContainer">
          <span className="cartCount">{cartCount}</span>
        </div>
      </div>
    </div>
  )
}
export default Navbar
