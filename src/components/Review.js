import React from 'react'
import { Panel, Button } from 'react-bootstrap'
import { withAuthentication } from "../helper/index";
import '../style/Review.css'


const Review = ({review, handleEditReviewFormShow, handleDeleteReview, authState}) => {
  const {id, title, text, rating, snacks_id, users_id, first_name} = review

  return (
    <div>
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3" className='review-header'>{title} by {first_name}
            {authState && authState.id===users_id ?
              <span className='buttons-container'>
                <Button bsStyle="warning"
                  onClick={()=>handleEditReviewFormShow(id)}
                  >
                  Edit
                </Button>
                <Button bsStyle="danger"
                  onClick={()=>handleDeleteReview(snacks_id, id)}>
                  Delete
                </Button>
              </span>
            : null
          }
          </Panel.Title>

        </Panel.Heading>
        <Panel.Body>
          <div>
            {rating} stars
          </div>
          <div>
            {text}
          </div>
        </Panel.Body>
      </Panel>
    </div>
  )
}

export default withAuthentication(Review)
