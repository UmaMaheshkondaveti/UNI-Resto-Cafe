import {Component} from 'react'
import './index.css'

class Items extends Component {
  state = {value: 0}

  onClickMinus = () => {
    const {decreaseCount} = this.props
    this.setState(prevState => ({value: prevState.value - 1}))
    decreaseCount()
  }

  onClickPlus = () => {
    const {increaseCount} = this.props
    this.setState(prevState => ({value: prevState.value + 1}))
    increaseCount()
  }

  render() {
    const {doll} = this.props
    const colors = ['red', 'brown', 'green']
    const col = colors[Math.floor(Math.random() * colors.length)]
    const dishImage = doll.dish_image
    const hasAddons = doll.addonCat && doll.addonCat.length > 0
    const {value} = this.state
    return (
      <li className="dishItem">
        <div className="z">
          <div className="one">
            <div className="square" style={{'--val': col}}>
              <div className="colorContainer" style={{'--cols': col}}>
                <p>{null}</p>
              </div>
            </div>
            <div className="two">
              <p className="dishName">{doll.dish_name}</p>
              <p className="dishCurrency">
                {doll.dish_currency} {doll.dish_price}
              </p>
              <p className="description">{doll.dish_description}</p>
              {doll.dish_Availability ? (
                <div className="butonIn">
                  <button
                    type="button"
                    className="plus"
                    onClick={() => this.onClickMinus()}
                  >
                    -
                  </button>
                  <p className="zero">{value}</p>
                  <button
                    type="button"
                    className="minus"
                    onClick={() => this.onClickPlus()}
                  >
                    +
                  </button>
                </div>
              ) : (
                <p className="notAvailable">Not Available</p>
              )}
              {hasAddons && <p className="custome">Customizations available</p>}
            </div>
          </div>
          <div className="x">
            <p className="calories">{doll.dish_calories} calories</p>
            <img src={dishImage} alt={doll.dish_name} className="dishImage" />
          </div>
        </div>
      </li>
    )
  }
}
export default Items
