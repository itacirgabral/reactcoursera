import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './MenuComponent'
import DishDetail from './DishdetailComponent'
import { DISHES } from '../shared/dishes'
import { COMMENTS } from '../shared/comments'
import { PROMOTIONS } from '../shared/promotions'
import { LEADERS } from '../shared/leaders'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Contact from './ContactComponent'
import { Switch, Route, Redirect } from 'react-router-dom'

class Main extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  render() {

    const HomePage = () => <Home 
          dish={this.state.dishes.find((dish) => dish.featured)}
          promotion={this.state.promotions.find((promo) => promo.featured)}
          leader={this.state.leaders.find((leader) => leader.featured)}
        />

        const DishWithId = ({match:{params:{dishId: id}}}) => <DishDetail
        dish={this.state.dishes.find(e => e.id == id)} 
        comments={this.state.comments.find(e => e.dishId == id)} 
      />

    return <>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage}/>
        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />}/>
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route exact path="/contactus" component={Contact} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </>
  }
}

export default Main
