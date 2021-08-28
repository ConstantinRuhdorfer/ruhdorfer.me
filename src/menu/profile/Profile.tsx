import './Profile.css'

import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Profile() {
    return (
        <div className='item-1 Profile'>
            <p className='profileText'>
                I am Constantin Ruhdorfer a master student of Informatics at the University of Stuttgart, Germany. 
                My interests lie in AI, computer vision, reinforcement learning, automatic reasoning and effective altruism.
                Connect with me via:</p>
            <div className='Socials'>
                <a className='item-0 Social' href="https://github.com/ConstantinRuhdorfer" aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a className='item-1 Social' href="https://www.linkedin.com/in/constantin-ruhdorfer/" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
                <a className='item-2 Social' href="https://twitter.com/cruhdorfer" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
            </div>
        </div>
    )
}

export default Profile;