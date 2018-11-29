import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'

const RenderDish = ({dish: e}) => <Card>
  <CardImg top src={e.image} alt={e.name} />
  <CardBody>
    <CardTitle>{e.name}</CardTitle>
    <CardText>{e.description}</CardText>
  </CardBody>
</Card>


const RenderComments = ({comments:e}) => <>
  <p>{e.comment}</p>
  <p>{e.author}</p>
</>

function Dishdetail(props) {
  return <div className="container">
    <div className="row">
      <div className="col-12 col-md-5 m-1">
        <RenderDish dish={props.dish} />
      </div>
      <div className="col-12 col-md-5 m-1">
        <RenderComments comments={props.comments} />
      </div>
    </div>
  </div>
}

export default Dishdetail
