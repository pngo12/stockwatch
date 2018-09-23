import React from 'react';
import {connect} from 'react-redux'


const PriceCard = props => {
    return ( 
    <div>
        <p className="title">{props.companyName}</p>
            <br />
            <p className="subtitle">{props.symbol}</p>
            <p className="subtitle"> ${props.latestPrice}</p>
    </div>
     );
}

const mapStateToProps = state => ({
    quote: state.quote
})



export default connect(mapStateToProps, null)(PriceCard)

