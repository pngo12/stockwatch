import React from 'react';
import {connect} from 'react-redux'
import { removeFromWatchlist } from '../../actions'

const WatchlistCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <p className="title">{props.title}</p>
                <p className="subtitle">{props.symbol}</p>
                <p className="subtitle">${props.latestPrice}</p>
            </div>
            <footer class="card-footer">
                <div className="buttons">
                    <span onClick={this.props.removeFromWatchlist()} className="button">Remove from wishlist</span>
                    <span className="button">Add to portfolio</span>
                </div>
            </footer>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removeFromWatchlist: dispatch(removeFromWatchlist())
})



export default connect(null, mapDispatchToProps)(WatchlistCard)

// class WatchlistCard extends Component {
//     state = {  }
//     render() { 
//         return ( 
//             <div className="card">
//                 <div className="card-content">
//                     <p className="title">{props.title}</p>
//                     <p className="subtitle">{props.symbol}</p>
//                     <p className="subtitle">${props.latestPrice}</p>
//                 </div>
//                 <footer class="card-footer">
//                     <div className="buttons">
//                         <span className="button">Remove from wishlist</span>
//                         <span className="button">Add to portfolio</span>
//                     </div>
//                 </footer>
//             </div>
//          );
//     }
// }
 
// export default connect(mapDispatchToProps, null)(WatchListCard)