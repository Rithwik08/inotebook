import React from "react";
import img from "./images/UGIn_1.jpg";
import img1 from "./images/UGIn_2.jpeg";
import img2 from "./images/UGIn_3.webp";
import img3 from "./images/UGIn_4.jpg";
import img4 from "./images/UGIn_5.jpg";
import img5 from "./images/UGIn_6.webp";

function UG() {
  return (
    <>
      <div className="container my-3">
        <h1 className="d-flex justify-content-center , text-muted">
          UnderGraduate Institutes in India
        </h1>
        <div className="row ">
          <div className="col-4 my-2 ">
            <img src={img} className="figure-img img-fluid rounded" alt="..." />
          </div>
          <div className="col-8">
            <h2>Indian Institute of Remote Sensing (IIRS), Dehradun:</h2>
            <p style={{ textAlign: "justify" }}>
              The Indian Institute of Remote Sensing (IIRS) in Dehradun,
              Uttarakhand, stands as a premier institution dedicated to the
              research, education, and application of remote sensing and
              geospatial technology. Established in 1966 under the Indian Space
              Research Organisation (ISRO), IIRS plays a pivotal role in
              advancing the field of remote sensing in India and beyond. With
              state-of-the-art facilities, cutting-edge research programs, and a
              strong emphasis on capacity building, IIRS offers a wide range of
              training courses, workshops, and degree programs catering to
              students, researchers, and professionals from diverse backgrounds.
              Its strategic location in the picturesque foothills of the
              Himalayas provides a conducive environment for learning and
              exploration, fostering innovation and collaboration in the field
              of remote sensing and geospatial science. <br /> As mentioned
              earlier, IIRS is known for remote sensing training Jamia Millia
              Islamia offers a Bachelor's program in Geography, and some courses
              within the department may cover remote sensing.
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
        <div className="row">
          <div className="col-8">
            <h2>Anna University, Chennai:</h2>
            <h3 className="text-muted"> Centre for Remote Sensing</h3>

            <p style={{ textAlign: "justify" }}>
              Anna University's Centre for Remote Sensing offers programs
              related to remote sensing. It's a center for research and
              application of remote sensing technology.
              <br />
              <a
                className="d-inline-flex , btn btn-secondary "
                href="https://www.annauniv.edu/"
              >
                To know more
              </a>
            </p>
          </div>
          <div className="col-4 ">
            <img
              src={img1}
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
              src={img2}
              className="figure-img img-fluid rounded"
              alt="..."
            />
          </div>
          <div className="col-8">
            <h2>Jamia Millia Islamia, New Delhi:</h2>
            <h3 className="text-muted"> Department of Geography</h3>
            <p style={{ textAlign: "justify" }}>
              Jamia Millia Islamia offers a Bachelor's program in Geography, and
              some courses within the department may cover remote sensing.
              <br />
              <a
                className="d-inline-flex , btn btn-secondary "
                href="https://jmi.ac.in/"
              >
                To know more
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <h1 className="d-flex justify-content-center , text-muted">
          UnderGraduate Institutes(International)
        </h1>
        <div className="row ">
          <div className="col-4 my-2 ">
            <img
              src={img3}
              className="figure-img img-fluid rounded"
              alt="..."
            />
          </div>
          <div className="col-8">
            <h2>University of California, Berkeley (USA):</h2>
            <p style={{ textAlign: "justify" }}>
              The University of California, Berkeley, commonly referred to as UC
              Berkeley or Berkeley, is a prestigious public research university
              located in Berkeley, California. Established in 1868 as the
              flagship institution of the University of California system,
              Berkeley has a long-standing reputation for academic excellence,
              groundbreaking research, and social activism. The university
              offers a wide range of undergraduate and graduate programs across
              various disciplines, including arts and humanities, social
              sciences, natural sciences, engineering, and business.
              <br />
              Department of Environmental Science, Policy, and Management Offers
              programs in Environmental Science, with potential courses related
              to remote sensing.
              <br />
              <a
                className="d-inline-flex , btn btn-secondary "
                href="https://www.berkeley.edu/"
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
            <h2>University of Twente (Netherlands):</h2>
            <h3 className="text-muted">
              {" "}
              Faculty of Geo-Information Science and Earth Observation (ITC)
            </h3>

            <p style={{ textAlign: "justify" }}>
              The University of Twente, located in Enschede, Netherlands, is a
              leading Dutch research university renowned for its focus on
              technology, innovation, and societal impact. Established in 1961,
              the University of Twente offers a wide range of undergraduate,
              postgraduate, and doctoral programs in fields such as engineering,
              natural sciences, social sciences, and management.
              <br />
              Provides a Bachelor's program in Geo-Information Science and Earth
              Observation with a focus on remote sensing.
              <br />
              <a
                className="d-inline-flex , btn btn-secondary "
                href="https://www.utwente.nl/"
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
            <h2>University of Würzburg (Germany):</h2>
            <h3 className="text-muted">Institute of Geography and Geology</h3>
            <p style={{ textAlign: "justify" }}>
              The University of Würzburg, located in Würzburg, Bavaria, Germany,
              is a renowned institution with a rich history dating back to its
              founding in 1402. As one of Germany's oldest universities, it has
              established itself as a center of academic excellence and research
              innovation
              <br />
              Offers a Bachelor's program in Geography, which may include
              courses related to remote sensing.
              <br />
              <a
                className="d-inline-flex , btn btn-secondary "
                href="https://www.uni-wuerzburg.de/"
              >
                To know more
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UG;
