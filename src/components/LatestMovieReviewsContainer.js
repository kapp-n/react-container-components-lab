import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


export default class LatestMovieReviewsContainer extends Component {

    state ={
        reviews: []
    }

    handleClick = () => {
        fetch(URL)
        .then(res => res.json())
        .then(reviews => {
            this.setState({
                reviews: reviews.results
            })
        })
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <hr/>
                <button onClick={this.handleClick}>Latest Reviews</button>
                {this.state.reviews.map(review => 
                     <MovieReviews 
                        title={review.display_title} 
                        publicationDate={review.publication_date}
                        shortSummary={review.short_summary}
                        /> )
                }
            </div>
        )
    }
}

