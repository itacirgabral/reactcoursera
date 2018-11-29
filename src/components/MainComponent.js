import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './MenuComponent'
import DishDetail from './DishdetailComponent'
import { DISHES } from '../shared/dishes'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }

  onDishSelect(dishId) {
    this.seSatte({ selectedDish: dishId })
  }

  render() {
    return <>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu 
        dishes={ this.state.dishes } 
        onClick={ dishId => this.onDishSelect(dishId) }
      />
      <DishDetail
        dish={ this.state.dishes.find(dish => dish.id === this.state.selectedDish) }
      />
    </>
  }
}

export default Main
