import React, { Component } from 'react'
import dakotaImg from '../assets/dakota.png';
import suriImg from '../assets/suri.jpg';
import janeImg from '../assets/jane.jpeg';
import joshImg from '../assets/josh.png';
import '../Profile.css'
import profile from  '../assets/profile.png'

export default class Profile extends Component {
    render() {
        return (
           

            <div className='container'>
                <h1 className='heading'> Our Team</h1>
            <div className='card-wrapper'>
                <div className='card'>
                    <img className='card-img' src={profile} alt=''/>
                    <img className='profile-img' src={dakotaImg} alt=''/>
                    <h1> Dakota Druley</h1>
                    <p className='title'>Software Developer</p>
                    <p className='about'> SOmething </p>
                   
                </div>
                <div className='card'>
                    <img className='card-img' src={profile} alt=''/>
                    <img className='profile-img' src={suriImg} alt=''/>
                    <h1> Surelis Segarra</h1>
                    <p className='title'>Software Developer</p>
                    <p className='about'> Something... </p>
                   
                </div> 
                 <div className='card'>
                    <img className='card-img' src={profile} alt=''/>
                    <img className='profile-img' src={janeImg} alt=''/>
                    <h1> Janelle  </h1>
                    <p className='title'>Software Developer</p>
                    <p className='about'>Something... </p>
                   
                </div>
                <div className='card'>
                    <img className='card-img' src={profile} alt=''/>
                    <img className='profile-img' src={joshImg} alt=''/>
                    <h1> Josh Ford</h1>
                    <p className='title'>Software Developer</p>
                    <p className='about'> Something... </p>

                </div>
            </div>
            </div>
            

        )
    }
}
