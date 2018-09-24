import React from 'react';

const News = props => {
    return ( 
        <div className="card">
        <div className="card-content">
            <p className="is-size-5 has-text-weight-semibold">{props.headline}</p>
            <p className="is-size-6 has-text-weight-light">{props.summary}</p>
        </div>
        <footer className="card-footer">
            <p className="card-footer-item">
            <span>
                 <a href={props.url}>View article</a>
            </span>
            </p>
        </footer>
        </div>
    )
}
 
export default News;