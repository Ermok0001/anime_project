import { Link } from 'react-router-dom'
import Img1 from './img/photo_2023-12-21_19-48-50.jpg'

export function Navigation(){
    return(
        <div className="Navigation">
            <Link to='/'>
            <img src={Img1}></img>
            </Link>
           <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contacts'>Contacts</Link>
            </li>
           </ul>
        </div>
    )
}