import React from 'react'

const MovieReviews = ({title, publicationDate, shortSummary}) => {

    return (
        <div className="review-list">
           <h3>{title}</h3>
           <h5>{publicationDate}</h5>
           <h6>{shortSummary}</h6>
        </div>
    )
}

export default MovieReviews