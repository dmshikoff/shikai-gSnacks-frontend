import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'

const Snack = ({snack, handleCardShow}) => {
  const { description, id, img, is_perishable, name, price } = snack

  const imgCropStyle = {
      height: '300px',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center'
  }

  const imgStyle = {

  }

  const cardStyle = {
    // height: '450px'
  }

  return (
    <div style={cardStyle}
      className="col-xs-4 well">
    <Card>
        <div style={imgCropStyle}>
          <CardImg style={imgStyle} height='100%' width="auto" src={img} alt={name} />
        </div>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>${price}</CardSubtitle>
          <CardText>{description}</CardText>
          <Button className='card-modal-button' bsstyle="primary" bssize="large" onClick={()=>handleCardShow(id)}>
                    More
                </Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default Snack
