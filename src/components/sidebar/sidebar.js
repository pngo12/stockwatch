import React from 'react';
import SearchInput from '../search-input/search-input'
import {Link} from 'react-router-dom'


const Sidebar = () => {
    return ( 
        <aside className="menu is-narrow-mobile is-fullheight section">
            <p className="menu-label">Navigation</p>
                <ul className="menu-list">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <a> Portfolio </a>
                    </li>
                    <li>
                        <Link to='/watchlist'>Watchlist</Link>
                    </li>
                    <li>
                        <SearchInput />
                    </li>
                </ul>
        </aside>
     );
}
 
export default Sidebar;