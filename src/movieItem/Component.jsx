import React, {Component} from 'react';

import cover from '../assets/killbill.jpg';
import '../movieItem/Component.css';

class MovieItem extends Component {
    render() {
        return(
            <div className="movieItem">
                <img src={cover}/>
                <div className="movieDescription">
                    <span className="title">KILL BILL: VOL.1</span>
                    <div className="year">2004</div>
                    <p>Actions</p>
                </div>
            </div>
        );
    }
}

export default MovieItem;