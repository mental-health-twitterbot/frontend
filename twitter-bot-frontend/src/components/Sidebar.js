import React from "react";
import Sidebar from "react-sidebar";
import './Toolbar.css';
import myLogo from '../assets/twitter.png'; 
import homelogo from '../assets/home.png';
import lists from '../assets/list.png';
import { Link, Router } from 'react-router-dom';
import profile from '../assets/profile.png';


const mql = window.matchMedia(`(min-width: 800px)`);
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };
 
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }
 
  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }
 
  render() {
    return (
        


    <Sidebar
      sidebar={
      <div>
        
        <img className='main-logo' src={myLogo} alt=''/>
        <ul> 
        
          <li className='img'> <img className='home' src={homelogo} alt=''/> <Link className='home'  to='/'>Home</Link></li>
          {/* <li className='img'> <img className='list' src={lists} alt=''/> Lists </li> */}
          <li className='img'> <img className='profile' src={profile} alt=''/> <Link className='about-us'  to='/about-us'>Profile</Link></li>
        {/* <Link className='about-us'  to='/about-us'></Link> */}
        
        </ul>
      </div>
      
      }
      open={this.state.sidebarOpen}
      docked={this.state.sidebarDocked}
      onSetOpen={this.onSetSidebarOpen}
    >
    </Sidebar>
    );
  }
}
export default App;