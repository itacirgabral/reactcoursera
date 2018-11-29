import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'

class Dishdetail extends React.Component {
  constructor(props) {
    super(props)
  }

  renderDish(dish) {
    if (dish != null) {
      return <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card> 
    } else {
      return <div></div>
    }
  }

  renderComments(comments) {
    if(comments && comments.length && comments.length > 0) {
      return <ListGroupItem><h4>{comments.length} comments</h4>
        {comments.map(e => <ListGroupItem><ListGroupItemHeading>{e.comment}</ListGroupItemHeading><ListGroupItemText>{e.author}</ListGroupItemText></ListGroupItem>)}
      </ListGroupItem>
    } else {
      return <div></div>
    }
  }

  render () {
    if (this.props.selectedDish) {
      console.log(this.props.selectedDish)
      return <div className="row">
        <div id="dishDetails" className="col-xs-12 col-sm-12 col-md-5 m1">
          {this.renderDish(this.props.selectedDish)}
        </div>
        <div id="dishComments" className="col-xs-12 col-sm-12 col-md-5 m1">
          <ListGroup>
            {this.renderComments(this.props.selectedDish.comments)}
          </ListGroup>
        </div>
      </div>
    } else {
      return <div className="row"></div>
    }
  }
}

export default Dishdetail
