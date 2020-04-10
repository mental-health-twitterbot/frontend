import React, { Component } from 'react'
import bcImage from '../assets/backgorund.jpg';
import dakotaImg from '../assets/dakota.png';
import suriImg from '../assets/suri.jpg';
import janeImg from '../assets/jane.jpeg';
// import joshImg from '../assets/anastasia.png';

export default class Profile extends Component {
    render() {
        return (
            <section>

            <div className='container'>
                <h1 className='heading'> Our Team</h1>
            <div className='card-wrapper'>
                <div className='card'>
                    <img className='background' src={bcImage} alt=''/>
                    <img className='profile-img' src={dakotaImg} alt=''/>
                    <h1> Dakota Druley</h1>
                    <p className='job-title'>Software Developer</p>
                    <p className='about'> Favorite Cocktail: 69 special </p>
                    <p className='contact'>Contact</p>
                </div>
                <div className='card'>
                    <img className='background' src={bcImage} alt=''/>
                    <img className='profile-img' src={suriImg} alt=''/>
                    <h1> Surelis Segarra</h1>
                    <p className='job-title'>Software Developer</p>
                    <p className='about'> Favorite Cocktail: Gin and Tonic </p>
                    <p className='contact'>Contact</p>
                </div>  <div className='card'>
                    <img className='background' src={bcImage} alt=''/>
                    <img className='profile-img' src={janeImg} alt=''/>
                    <h1> Janelle  </h1>
                    <p className='job-title'>Software Developer</p>
                    <p className='about'> Favorite Cocktail: The Vesper Royale </p>
                    <p className='contact'>Contact</p>
                </div>
                {/* <div className='card'>
                    <img className='background' src={bCImage} alt=''/>
                    <img className='profile-img' src={anastasiaImg} alt=''/>
                    <h1> Josh Ford</h1>
                    <p className='job-title'>Software Developer</p>
                    <p className='about'> Favorite Cocktail: Mezcal Margarita </p>
                    <p className='contact'>Contact</p>
                </div> */}
            </div>
            </div>
</section>
        )
    }
}
