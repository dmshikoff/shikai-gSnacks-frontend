import React from 'react'
import Review from './Review'



const ReviewList = ({currReviews, handleEditReviewFormShow, handleDeleteReview}) => {
  const Reviews = currReviews.map(review => {
    return (
      <Review
        key={review.id}
        review={review}
        handleEditReviewFormShow={handleEditReviewFormShow}
        handleDeleteReview={handleDeleteReview}
      />
    )
  })

    return (
      <div className='reviews-container'>
        {Reviews}
      </div>
    )
}

export default ReviewList
