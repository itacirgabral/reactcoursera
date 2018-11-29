import React from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'

function RenderMenuItem({ dish}) {
  return <Card >
    <Link to={`/menu/${dish.id}`}> 
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Link>
  </Card>
}

const Menu = props => <div className="container">
  <div className="row">
    {props.dishes.map(
      dish => <div className="col-12 col-md-5 m-1"  key={dish.id}>
        <RenderMenuItem dish={dish} />
      </div>
    )}
  </div>
</div>

export default Menu
