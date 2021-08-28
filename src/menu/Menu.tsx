import './Menu.css'
import Copyright from './copyright/Copyright';
import Portrait from './potrait/Portrait';
import Profile from './profile/Profile';

function Menu() {
    return (
        
        <div className='item-1 Menu'>
            <Portrait />
            <Profile />
            <Copyright />
        </div>
    )
}

export default Menu;