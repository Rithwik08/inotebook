import React from 'react'

export default function Cardings() {
  return (
    <div className='container'>
      <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      
      <img src="https://source.unsplash.com/200x150/?code,nature" className="card-img-top" alt="..."/>
      <div className="card-body">
       <a href="https://youtu.be/yiyfz89MoRc" ><h5 className="card-title">Satellite Image Procesing</h5></a> 
       <h5>Content Description </h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://source.unsplash.com/200x150/?code,python" className="card-img-top" alt="..."/>
      <div className="card-body">
      <a href="/" ><h5 className="card-title">Module2-Title</h5></a> 
      <h5>Content Description </h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://source.unsplash.com/200x150/?code,technical" className="card-img-top" alt="..."/>
      <div className="card-body">
      <a href="/" ><h5 className="card-title">Module3-Title</h5></a> 
      <h5>Content Description <span className="badge bg-secondary">New</span></h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://source.unsplash.com/200x150/?code" className="card-img-top" alt="..."/>
      <div className="card-body">
      <a href="/" ><h5 className="card-title">Module4-Title</h5></a> 
        <h5>Content Description <span className="badge bg-secondary">New</span></h5>
      </div>
    </div>
  </div>
</div>
    </div>
  
    
  )
}
