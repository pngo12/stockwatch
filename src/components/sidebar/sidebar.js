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