import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, url, author, date, source } = this.props;
        return (
            <div className="my-3 p-2">
                <div className="card" >
                
                    <img src={!imageUrl ? "https://th.bing.com/th/id/OIP.0o-wTDuEEj_JeY5udIMeQwHaEK?w=331&h=186&c=7&r=0&o=5&dpr=1.1&pid=1.7" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <span className="position-relative top-0 translate-middle badge rounded-pill bg-danger" style={{color: 'white'}} >
                        {source}
                        </span>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={url} target="_blank" className="btn btn-sm btn-dark " rel="noreferrer">Read More</a>

                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem