import React from 'react';
import styles from '../app/app.css';

class AppFooter extends React.PureComponent {
    render(){
        return(
            <footer>
                <h3 className={styles.logo}>netflixroulette</h3>
            </footer>    
        )
    }
}

export default AppFooter;