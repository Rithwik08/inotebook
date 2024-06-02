import React from 'react'
import img from "./images/GeorgeJoseph.jpg"
import img2 from "./images/Prakash.png"
import img3 from "./images/Nadar.jpg"
import img4 from "./images/nadar1.jpg"
import img5 from "./images/cloudlandcanyon.webp"

function VisionariesHub() {
  return (
    <>
    <div className="container my-3">
        <h2 className="d-flex justify-content-center , text-muted">
        Pioneers’ Circle
        </h2>
        <div className="row ">
          <div className="col-4 my-2 ">
            <img
              src={img3}
              className="figure-img img-fluid rounded"
              alt="..."
            />
          </div>
          <div className="col-8">
            <h2>Gaspard Felix Tournachon</h2>

            <p style={{ textAlign: "justify" }}>
            Gaspard-Félix Tournachon (5 April 1820 – 20 March 1910[1]),
                known by the pseudonym Nadar, was a French photographer,
                caricaturist, journalist, novelist, balloonist, and proponent of
                heavier-than-air flight. In 1858, he became the first person to
                take aerial photographs.
              <br/>
              Systematic aerial photography was developed for military
                surveillance and reconnaissance purposes beginning in World War
                I.After WWI, remote sensing technology was quickly adapted
                to civilian applications.
              <br />
              Towards the end of his life, Nadar published Quand j'étais
                photographe, which was translated into English and published by
                MIT Press in 2015. The book is full of both anecdotes and
                samples of his photography, including many portraits of
                recognizable names. The painter Jean-Auguste-Dominique Ingres
                sent some of his clients to Nadar to have their photographs
                taken as studies for his paintings.
            </p>
          </div>
        </div>
      </div>
     
      <div className="container my-3">
        <div className="row">
          <div className="col-8">
            <h2>George Joseph</h2>

            <p style={{ textAlign: "justify" }}>
            George Joseph (born 4 August 1938) is an Indian space scientist,
                best known for his contributions to the development of remote
                sensing technology in India, especially in the field of Earth
                observation sensors. He is a former chairman of the Lunar
                Mission Study Task Force of the Indian Space Research
                Organization and an elected fellow of the National Academy of
                Sciences, India, Indian Academy of Sciences and Indian National
                Academy of Engineering. The Government of India awarded him the
                Padma Bhushan, the third highest civilian award, in 1999.
              <br />
            </p>
          </div>
          <div className="col-4 ">
            <img
              src={img}
              className="figure-img img-fluid rounded"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="container my-3">
        <div className="row">
          <div className="col-4 ">
            <img
              src={img5}
              className="figure-img img-fluid rounded"
              alt="..."
            />
          </div>
          <div className="col-8">
            <h2> Dr.Sarah Bang</h2>
            <p style={{ textAlign: "justify" }}>
            She is a Remote Sensing Scientist at NASA Marshall Space Flight
                Center Earth Science Branch.Specialties: Focus on TRMM and GPM
                satellites, passive-microwave radiometry, ground radar, and
                field meteorology. IDL (primary), elementary knowledge of:
                Python, FORTRAN, Matlab, HTML and TeX.
              <br />
            </p>
          </div>
        </div>
        <div className="container my-3">
          <div className="row">
            <div className="col-8">
              <h2>Dr.Prakash Chauhan</h2>

              <p style={{ textAlign: "justify" }}>
              Dr Prakash Chauhan (born on 15.05.1969) obtained his
                postgraduate degree in Applied Geophysics from University of
                Roorkee (now Indian Institute of Technology (IIT), Roorkee) and
                Ph. D. in Physics from Gujarat University, Ahmedabad. Prior to
                joining National Remote Sensing Centre (NRSC), Hyderabad, he was
                the Director at the Indian Institute of Remote Sensing (IIRS),
                Dehradun since April 2018. He joined Indian Space Research
                Organisation (ISRO) in 1991 at Space Applications Centre,
                Ahmedabad as scientist and since then working for the
                applications of Space Technology including Remote Sensing
                technology for Geosciences, Atmospheric and Oceanic process
                studies, Natural resources management for ocean and land
                resources. He initiated research activities for planetary remote
                sensing at Space Applications Centre to study solar system
                objects mainly Earth’s Moon and Mars, through Indian planetary
                missions.
                <br />
                His major achievements are in the area of Earth Observation
                applications including development of algorithms for ocean
                colour parameter retrieval, marine living resource assessment,
                aerosol remote sensing for space based air quality monitoring,
                river and reservoir water level estimation using space borne
                altimeters and coastal zone management. More recently he has
                been working to use satellite remote sensing data for
                understanding the climate response of Himalayan Cryosphere and
                Air Quality assessment from Space.
              <br />
              </p>
            </div>

            <div className="col-4 ">
              <img
                src={img2}
                className="figure-img img-fluid rounded"
                alt="..."
              />
            </div>            
          </div>
        </div>
      </div>
     
      
      
    </>

    
  )
}

export default VisionariesHub