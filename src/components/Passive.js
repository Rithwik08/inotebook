import React from "react";
import img from "./images/passive.png";
import img2 from "./images/Active2.png";

function Passive() {
  return (
    <>
      <div className="mx-4 , my-4">
        <h2 className="d-flex justify-content-center">
          Active & Passive
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img className="d-block w-100 h-60" src={img} />
              <div className="d-flex flex-row-reverse ">
              <h5>
                  <small className="text-muted">NASA Earthdata</small>
               </h5>
              </div>
               
            </div>

            <div className="col-8">
              <h2>
                Passive RemoteSensing
              </h2>
              <p  style={{ textAlign: "justify" }}>
                Inactive remote detecting is a technique utilized to gather data
                about the World's surface without effectively discharging
                electromagnetic radiation from the detecting instrument. Passive
                sensors, on the other hand, are used to measure and detect the
                natural radiation emitted or reflected by the Earth's surface,
                which typically comes from the Sun or other celestial bodies.
                Here are key parts of inactive remote detecting:
              </p>
            </div>
          </div>
          <p>
            <li  style={{ fontSize: "1.2rem" , textAlign: "justify" }}>
              Normal Radiation Source:
            </li>
            <p style={{ textAlign: "justify" }}>
              Aloof sensors depend on normally happening wellsprings of
              radiation, like daylight, evening glow, or warm discharges from
              the World's surface. The energy utilized for detecting isn't
              misleadingly created by the actual sensor.
            </p>
            <li  style={{ fontSize: "1.2rem" , textAlign: "justify" }}>
              
              Sensor Types:
            </li>
            <p style={{ textAlign: "justify" }}>
              Latent remote detecting utilizes different sorts of sensors, each
              intended to catch explicit bits of the electromagnetic range.
              Remarkable models include:
            </p>
            <ol>
              <li  style={{ fontSize: "1.2rem" , textAlign: "justify" }}>
                Optical Sensors:
              </li>
              <p style={{ textAlign: "justify" }}>
                These sensors catch apparent and close infrared light, and
                models incorporate cameras and multispectral sensors.
              </p>
              <li  style={{ fontSize: "1.2rem" , textAlign: "justify" }}>
                Infrared Sensors:
              </li>
              <p  style={{ textAlign: "justify" }}>
                The surface of the Earth emits thermal infrared radiation, which
                makes these sensors useful for temperature monitoring.
              </p>
              <li  style={{ fontSize: "1.2rem" , textAlign: "justify" }}>
                Microwave Sensors:
              </li>
              <p  style={{ textAlign: "justify" }}>
                These sensors measure normally happening microwave radiation,
                and their applications incorporate soil dampness detecting.
              </p>
            </ol>
            <div className="row">
              <div className="col-8">
                <li  style={{ fontSize: "1.2rem" , textAlign: "justify" }}>
                   Sun based Illumination:
                </li>
                <p  style={{ textAlign: "justify" }}>
                  Daylight fills in as a critical wellspring of brightening for
                  latent sensors. The World's surface reflects and produces
                  radiation, and sensors record this reflected or transmitted
                  energy to accumulate data about surface properties.
                </p>
                <li  style={{ fontSize: "1.2rem" , textAlign: "justify" }}>
                  Fleeting Limitations:
                </li>
                <p  style={{ textAlign: "justify" }}>
                  Inactive sensors are for the most part compelled by sunlight
                  conditions, giving ideal information during sunshine hours.
                  They are less compelling during evening except if there is
                  adequate twilight or fake light.
                </p>
                <li  style={{ fontSize: "1.2rem" , textAlign: "justify" }}>
                  Multispectral Imaging:
                </li>
                <p  style={{ textAlign: "justify" }}>
                  Multispectral and hyperspectral sensors are usually utilized
                  in uninvolved remote detecting. These sensors catch data in
                  different ghostly groups, empowering point by point
                  examination of the World's surface in light of its one of a
                  kind otherworldly mark.
                </p>
              </div>

              <div className="col-4">
                <img className="d-block w-100 h-60" src={img2} />
              </div>
            </div>
            <li  style={{ fontSize: "1.2rem" , textAlign: "justify" }}>
               Information Interpretation:
            </li>
            <p  style={{ textAlign: "justify" }}>
              Understanding of inactive remote detecting information includes
              dissecting the reflectance or outflow attributes of various
              materials on the World's surface. This examination gives
              significant experiences into land cover, vegetation wellbeing, and
              ecological changes.
            </p>
            <li  style={{ fontSize: "1.2rem" , textAlign: "justify" }}>
               Spatial Resolution:
            </li>
            <p  style={{ textAlign: "justify" }}>
              The spatial goal of detached sensors decides the degree of detail
              in the symbolism. The development of sensors with a higher spatial
              resolution as a result of advancements in sensor technology has
              improved their capacity to capture fine-scale features.
            </p>
            <p  style={{ fontSize: "1.4rem" }}>
              Applications:
            </p>
            <p  style={{ textAlign: "justify" }}>
            Aloof remote detecting tracks down assorted applications across different fields:
            </p>
            <ol>
              <li  style={{ fontSize: "1.2rem" , textAlign: "justify" }}>
                Meteorology:
              </li>
              <p  style={{ textAlign: "justify" }}>
              It is used for weather conditions observing, overcast cover investigation, and temperature estimations.
              </p>
              <li  style={{ fontSize: "1.2rem" , textAlign: "justify" }}>
                Natural Monitoring:
              </li>
              <p  style={{ textAlign: "justify" }}>
              Latent sensors are important for concentrating ashore cover, vegetation wellbeing, and changes in the World's surface over the long run.
              </p>
              <li  style={{ fontSize: "1.2rem" , textAlign: "justify" }}>
                Agriculture:
              </li>
              <p  style={{ textAlign: "justify" }}>
              These sensors add to evaluating crop wellbeing, checking development designs, and distinguishing horticultural practices.
              </p>
              <li  style={{ fontSize: "1.2rem" , textAlign: "justify" }}>
                Geology:
              </li>
              <p  style={{ textAlign: "justify" }}>
              Inactive remote detecting is applied for mineral investigation and landscape examination.
              </p>
              <li  style={{ fontSize: "1.2rem" , textAlign: "justify" }}>
                Astronomy:
              </li>
              <p  style={{ textAlign: "justify" }}>
              Past Earth, latent remote detecting is broadly utilized in cosmic perceptions..
              </p>
            </ol>
            <div className="container , d-flex justify-content-center">
              <p style={{ textAlign: "justify" }}>
                
                  While dynamic remote detecting enjoys various benefits, it
                  likewise accompanies difficulties, including higher hardware
                  and functional expenses. The decision among dynamic and latent
                  remote detecting relies upon the particular prerequisites of
                  the application and the ideal attributes of the gathered
                  information.
                
              </p>
            </div>
          </p>
        </div>
      </div>
    </>
  );
}

export default Passive;
