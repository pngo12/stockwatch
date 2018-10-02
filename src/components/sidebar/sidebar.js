import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './sidebar.css'

class Sidebar extends Component {
    render() {
        let visibility = 'hide'
        if (this.props.sidebarVisibility) {
            visibility = 'show'
        }
        return (
            <div className="columns">
                <div className="column is-half">
                    <aside id="hiddenMenu"
                        onMouseUp={this.props.handleMouseDown}
                        className={visibility}>
                        <a onMouseUp={this.props.handleMouseDown}>
                            <i id="leftArrow" className="fas fa-arrow-left fa-2x"></i>
                        </a>
                        <ul className="menulist">
                            <p className="menu-label">Navigation</p>
                            <li><Link to='/'>Home</Link> </li>
                            <li><Link to='/watchlist'>Watchlist</Link></li>
                            <li><Link to='/dashboard/AAPL'>Dashboard</Link></li>
                        </ul>
                    </aside>
                </div>
            </div>
        );
    }
}

export default Sidebar;



// import React, { Component } from 'react';
// import {Router, Route} from 'react-router-dom'
// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav'



// <Router>
//     <Route render={({location, history}) => (
//         <React.fragment>
//             <SideNav
//                 onSelect={(selected) => {
//                     const to='/' + selected
//                     if (location.pathname !== to) {
//                         history.push(to)
//                     }
//                 }}
//                 >
//                 <SideNav.Toggle />
//                 <SideNav.Nav defaultSelected="home">
//                     <NavIcon>
//                         <i className="fa fa-fw fa-home" style={{fontSize: '1.75em'}} />
//                     </NavIcon>
//                     <NavText>
//                         Home
//                     </NavText>
//                 </SideNav.Nav>


//                 </SideNav>
//         </React.fragment>
//     )}
// </Router>