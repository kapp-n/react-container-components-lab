import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;



export default class SearchableMovieReviewsContainer extends Component {

    state = {
        searchTerm: [],
        reviews:[]
    }


    handleSubmit = (e) => {
        e.preventDefault()
        fetch(URL)
        .then(res => res.json())
        .then(reviews => {
            this.setState({
                searchTerm: reviews.results
            })
            console.log(this.state)
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" />
                    <input type="submit" value="submit" />
                </form>
                {this.state.searchTerm.map(review => 
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

