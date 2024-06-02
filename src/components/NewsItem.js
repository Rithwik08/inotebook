import React, { Component } from 'react'

export class NewsItem extends Component {
   
  render() {
    let {Title,Description,imageUrl,newsUrl,author,date,source}=this.props
    return (
      <div><div className="card" style={{width: "18rem"}}>
      <img src={imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
      <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '90%',zIndex:'1'}}> {source} </span>
        <h5 className="card-title">{Title}</h5>
        <p className="card-text">{Description}</p>
        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Go somewhere</a>
      </div>
    </div>
    </div>
    )
  }
}

export default NewsItem