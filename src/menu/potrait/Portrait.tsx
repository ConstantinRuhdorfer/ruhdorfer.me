import './Portrait.css'

import keyframe from './assets/keyframe-min.jpg';

function Portrait() {
    return (
        <div className='item-0 Portrait'>
            <img className='keyFrame' src={keyframe} alt='Me in a yellow hoddie.'/>
            <h1 className='keyText'>Hi, I am Constantin!</h1>
        </div>
    )
}

export default Portrait;