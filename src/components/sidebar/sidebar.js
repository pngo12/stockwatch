import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './sidebar.css'

class Sidebar extends Component {
    render() { 
        let visibility = 'hide'
        if(this.props.sidebarVisibility){
            visibility = 'show'
        }
        return ( 
            <div id="hiddenMenu"
            onMouseUp={this.props.handleMouseDown}
            className={visibility}>
                <i className="fas fa-arrow-left fa-2x"></i>
                <ul>
                    <li><Link to='/'>Home</Link> </li>
                    <li><Link to='/watchlist'>Watchlist</Link></li>
                </ul>
            </div>
         );
    }
}
 
export default Sidebar;