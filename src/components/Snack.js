import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'

const Snack = ({snack, handleCardShow}) => {
  const { description, id, img, name, price } = snack

  const imgCropStyle = {
      height: '300px',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center'
  }

  const truncateDescriptionString = () => {
    const maxLength = 30;
    const trimmedString = description.substring(0, maxLength);
    return description.length<=maxLength ? description : `${trimmedString}...`
  }

  return (
    <div className="col-xs-4 well">
    <Card>
        <div style={imgCropStyle}>
          <CardImg height='100%' width='auto' src={img} alt={name} />
        </div>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>${price}</CardSubtitle>
          <CardText>{truncateDescriptionString()}</CardText>
          <Button className='card-modal-button' bsstyle='primary' bssize='large' onClick={()=>handleCardShow(id)}>
                    More
                </Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default Snack
