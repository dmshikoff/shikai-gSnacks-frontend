import React from "react";
import { Modal, Button } from 'react-bootstrap'
import '../style/ReviewForm.css'

const EditReviewForm = (props) => {
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>Edit Review</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{ maxHeight: "calc(100vh - 210px)", overflowY: "auto" }}
      />
      {
          <form className='reviewForm'
          onSubmit={event => {
            event.preventDefault()
            props.handleEditReview(event,props.currSnack.id,props.reviewForEdit)
          }}
          >
          <label>
          {`Title: `}
          <input type="text" name='title'/>
          </label>
        <label>
            {`Rating: `}
            <input type='number' name='rating' min="1" max="5"/>
        </label>
        <label>
        <textarea type="text" name='text' placeholder='Comments...' cols='70' rows='10'>
        </textarea>
        </label>
        <Button type='submit'>Submit</Button>
        </form>
      }
      <Modal.Footer>
        <Button onClick={props.handleEditReviewFormClose}>Cancel</Button>
        <Button onClick={props.handleCardClose}>Close</Button>
      </Modal.Footer>
    </div>
  );
};

export default EditReviewForm
