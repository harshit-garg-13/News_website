import React, { Component } from 'react'

export default class NewItems extends Component {
  render() {
    let {title,description,imageurl,url,author,date,source}= this.props;
    return (
      <div style={{display:'flex',justifyContent:'center'}}>
        
        <div className="card my-2" style={{width: "18rem"}}>
  <img src={imageurl!=null?imageurl:"https://images.moneycontrol.com/static-mcnews/2024/05/20240525112405_marketup_sensexup-Niftyup.jpg"} style={{height: "12rem"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}....</h5>
    <p className="card-text">{description}....</p>
    <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'50px'}}>
  {source.name}
   
  </span>
    <a href={url}  className="btn btn-primary">Read Mo</a>
  </div>
</div>
      </div>
    )
  }
}
