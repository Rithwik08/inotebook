import React from "react";
import img1 from "./images/DIP_1.jpg";
import img2 from "./images/DIP_2.jfif";
import img3 from "./images/DIP_3.jpg";
import img4 from "./images/DIP_4.jpg";

function Diploma() {
  return (
    <>
      <div className="container my-3">
        <h1 className="d-flex justify-content-center , text-muted">
          Diploma Institutes in India
        </h1>
        <div className="row">
          <div className="col-4 ">
            <img
              src={img1}
              className="figure-img img-fluid rounded"
              alt="..."
            />
          </div>
          <div className="col-8">
            <h2>Indian Institute of Remote Sensing (IIRS), Dehradun:</h2>
            <p style={{ textAlign: "justify" }}>
              IIRS is a premier institute under the Indian Space Research
              Organisation (ISRO), specializing in remote sensing and geospatial
              technology.
              <br />
              It offers various short-term courses, training programs, and
              diploma courses in remote sensing and GIS (Geographic Information
              System).
              <br/>The institute's programs cater to both professionals and students
            interested in building expertise in remote sensing applications.
            <br />
            <a
              className="d-inline-flex , btn btn-secondary "
              href="https://www.iirs.gov.in/"
            >
              To know more
            </a>
            </p>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <h1 className="d-flex justify-content-center , text-muted">
          Diploma Institutes(International) 
        </h1>
        <div className="row">
          <div className="col-8">
            <h2>Centre for Remote Imaging, Sensing, and Processing (CRISP)</h2>
            <h3 className="text-muted">
              National University of Singapore (NUS):
            </h3>

            <p style={{ textAlign: "justify" }}>
              The Centre for Remote Imaging, Sensing, and Processing (CRISP) at
              the National University of Singapore (NUS) is a renowned
              institution dedicated to advancing knowledge and expertise in the
              field of remote sensing and geospatial data processing.
              <br/>
              CRISP offers training and diploma programs in remote sensing and
            satellite image analysis.
            <br />
            <a
              className="d-inline-flex , btn btn-secondary "
              href="https://crisp.nus.edu.sg/"
            >
              To know more
            </a>
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
      <div className="container my-3">
        <div className="row">
          <div className="col-4 ">
            <img
              src={img3}
              className="figure-img img-fluid rounded"
              alt="..."
            />
          </div>
          <div className="col-8">
            <h2>
              Centre for Remote Sensing and Geographic Information Services
              (CERSGIS)
            </h2>
            <h3 className="text-muted"> University of Ghana:</h3>
            <p style={{ textAlign: "justify" }}>
              The Centre for Remote Sensing and Geographic Information Services
              (CERSGIS) at the University of Ghana serves as a focal point for
              research, education, and application of remote sensing and
              geospatial information technologies.
              <br /> CERSGIS provides training programs and diploma courses in
              remote sensing and GIS.
              <br />
              <a
                className="d-inline-flex , btn btn-secondary "
                href="https://cersgis.org/"
              >
                To know more
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <div className="row">
          <div className="col-8">
            <h1>
              International Centre for Remote Sensing Education (ICRSE), Wuhan
              University, China:
            </h1>
            <p style={{ textAlign: "justify" }}>
              The International Centre for Remote Sensing Education (ICRSE) at
              Wuhan University in China stands as a distinguished institution
              dedicated to advancing education and research in the field of
              remote sensing. Established to meet the increasing demand for
              expertise in remote sensing technologies, ICRSE operates within
              Wuhan University, A prominent institution known for its
              contributions to scientific research and education.
            ICRSE offers international training programs and diploma courses in
            remote sensing and GIS.
            <br />
            <a
              className="d-inline-flex , btn btn-secondary "
              href="https://rsgis.whu.edu.cn/English/Home.htm"
            >
              To know more
            </a>
            </p>
          </div>
          <div className="col-4 ">
            <img
              src={img4}
              className="figure-img img-fluid rounded"
              alt="..."
            />
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Diploma;
