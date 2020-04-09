import React from "react";
import Sidebar from "react-sidebar";
 import './Toolbar.css';
 import myLogo from '../assets/twitter.png'; 
 import homelogo from '../assets/home.png';
import explorelogo from '../assets/hashtag.png';
import bell from '../assets/bell.png';
import mail from '../assets/email.png';
import mark from '../assets/small-bookmark.png';
import lists from '../assets/list.png';
import more from '../assets/more.png';
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
        <div className='sidebar'>

          <img className='main-logo' src={myLogo} alt=''/>
          <ul> 
            <li> <img className='home' src={homelogo} alt=''/> Home</li>
        <li> <img className='explore' src={explorelogo} alt=''/> Explore</li>
            <li> <img className='bell' src={bell} alt=''/> Notifications</li>
            <li> <img className='mail' src={mail} alt=''/> Messages</li>
            <li> <img className='mark' src={mark} alt=''/> Booksmarks</li>
            <li> <img className='list' src={lists} alt=''/> Lists</li>
            <li> <img className='profile' src={profile} alt=''/> Profile</li>
            <li> <img className='more' src={more} alt=''/> More</li>
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