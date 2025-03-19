import {Component} from 'react'
import Navbar from '../Navbar'
import Items from '../Items'
import './index.css'

class Home extends Component {
  state = {item: [], activeId: '', cartCount: 0}

  componentDidMount() {
    const {details} = this.props
    const firstCategory = details[0].table_menu_list[0].category_dishes
    this.setState({
      item: firstCategory,
      activeId: details[0].table_menu_list[0].menu_category_id,
    })
  }

  clickItem = i => {
    this.setState({item: i.category_dishes})
    this.setState({activeId: i.menu_category_id})
  }

  increaseCount = () => {
    this.setState(i => ({
      cartCount: i.cartCount + 1,
    }))
  }

  decreaseCount = () => {
    this.setState(i => ({
      cartCount: i.cartCount > 0 ? i.cartCount - 1 : 0,
    }))
  }

  render() {
    const {details} = this.props
    const dat = details[0]
    const tableMenuList = dat.table_menu_list
    const {item, activeId, cartCount} = this.state
    return (
      <div className="mainDiv">
        {console.log(cartCount)}
        <Navbar data={details} cartCount={cartCount} />
        <div>
          <div className="buttonContainer">
            <ul className="listElement">
              {tableMenuList.map(i => (
                <li key={i.menu_category_id} className="listItem">
                  <button
                    type="button"
                    className={`buttonItem ${
                      activeId === i.menu_category_id ? 'active' : ''
                    }`}
                    onClick={() => this.clickItem(i)}
                  >
                    {i.menu_category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <ul className="dishList">
            {item.map(i => (
              <Items
                key={i.dish_id}
                doll={i}
                increaseCount={this.increaseCount}
                decreaseCount={this.decreaseCount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Home
