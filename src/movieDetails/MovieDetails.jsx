import React, {Component} from 'react';
import cover from '../assets/killbill.jpg';
import '../movieDetails/movieDetails.css';

class MovieDetails extends Component {
    render() {
        return (
            <div className="movieDetails">
                <img src={cover}/>
                <div className="movieText">
                    <h2>Pulp Fiction</h2>
                    <span className="rate">4.1</span>
                    <p className="awards">Oscar-winning Movies</p>
                    <p>
                        <span className="releaseYear">1994</span>
                        <span className="duration">154 min</span>
                    </p>
                    <p>
                         is a 1994 American crime film written and directed by Quentin Tarantino, 
                         based on a story by Tarantino and Roger Avary,[4] and starring John Travolta, 
                         Samuel L. Jackson, Bruce Willis, Ving Rhames, and Uma Thurman. 
                         The film tells a few stories of criminal Los Angeles. 
                         The films title refers to the pulp magazines and hardboiled crime novels popular 
                         during the mid-20th century, known for their graphic violence and punchy dialogue.
                    </p>
                </div>
            </div>
        );
    }
}

export default MovieDetails