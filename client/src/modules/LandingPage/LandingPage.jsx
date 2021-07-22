import './LandingPage.css'
import {Link} from 'react-router-dom';

export default function LandingPage() {
    return (
        <div className='LandingPage'>
            <h3>Welcome to Videogames App!</h3>
            <Link to='/home/'>
            <button className='button-enter' type='submit'>Enter!</button> 
            </Link>
        </div>
    )
}
           


