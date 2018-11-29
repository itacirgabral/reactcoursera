import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './MenuComponent'
import DishDetail from './DishdetailComponent'
import { DISHES } from '../shared/dishes'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import { Switch, Route, Redirect } from 'react-router-dom'

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }


  

  render() {
    return <>
      <Header />
      <Switch>
        <Route path="/home" component={() => <Home />}/>
        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />}/>
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </>
  }
}

export default Main
