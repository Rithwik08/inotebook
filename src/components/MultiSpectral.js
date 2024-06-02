import React from "react";
import img1 from "./images/Multispectral.png";
import img2 from "./images/Difference.webp";

function MultiSpectral() {
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-6">
            <h1>MultiSpectral RemoteSensing</h1>

            <p style={{ textAlign: "justify" }}>
              Multispectral remote sensing involves capturing data across
              several discrete bands within the electromagnetic spectrum,
              typically in the visible, near-infrared, and shortwave infrared
              regions. This approach provides valuable information about the
              composition, structure, and condition of the Earth's surface and
              atmosphere by analyzing the unique spectral signatures of
              different materials and environmental features.
              <br /> A common form of multispectral imagery that many are
              acquainted with is a color image, characterized by three bands:
              red, green, and blue.
            </p>
          </div>

          <div className="col-6">
            <img src={img1} className=" d-block w-100 h-60" alt="..." />
          </div>
          <p style={{ textAlign: "justify" }}>
            Each band corresponds to light reflections from the red, green, or
            blue segments of the electromagnetic spectrum. The pixel intensity
            in each band, when combined, generates the colors visible in an
            image. These colors align with those perceptible to the human eye
            within the visible range of the electromagnetic spectrum. One of the
            key advantages of multispectral remote sensing is its ability to
            differentiate between various land cover types, such as vegetation,
            water, and urban areas, based on their distinctive spectral
            properties. By analyzing the reflectance patterns across different
            wavelengths, scientists can classify and map different land cover
            classes with high accuracy, providing essential information for land
            use planning, environmental monitoring, and natural
            resource management.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={img2} className=" d-block w-100 h-60" alt="..." />
          </div>
          <div className="col-8">
            < p style={{textAlign:"justify"}}>
              Multispectral sensors are commonly deployed on satellites,
              aircraft, and unmanned aerial vehicles (UAVs) to collect data over
              large areas with varying spatial resolutions. These sensors
              typically capture data across a few discrete bands, ranging from
              three to ten or more, depending on the specific application and
              sensor characteristics. Common bands include the blue, green, red,
              near-infrared, and shortwave infrared regions, which are sensitive
              to different surface features and phenomena.
            </p>
            <h2 className="">
              <b>Difference between Spectral & MultiSpectral</b>
            </h2>
          </div>
        </div>
      </div>
      <div className="table-responsive , container">
        <table className="table align-middle">
          <thead>
            <tr>
              <th style={{ fontSize: "1.5rem" }}> RemoteSensing Bands</th>
              <th style={{ fontSize: "1.5rem" }}>Spectral range</th>
              <th style={{ fontSize: "1.5rem" }}>Data Complexity</th>
              <th style={{ fontSize: "1.5rem" }}>Sensors Design</th>
              <th style={{ fontSize: "1.5rem" }}>Applications</th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-bottom">
              <td style={{ fontSize: "1.2rem" }}>
                Captures data in hundreds of bands.
              </td>
              <td style={{ fontSize: "1.2rem" }}>
                Covers a broad and continuous range of the electromagnetic
                spectrum.
              </td>
              <td style={{ fontSize: "1.2rem" }}>
                Results in complex datasets due to numerous finely spaced bands.
              </td>
              <td style={{ fontSize: "1.2rem" }}>
                Requires sophisticated sensors to capture a wide range of
                contiguous bands.
              </td>
              <td style={{ fontSize: "1.2rem" }}>
                Ideal for detailed scientific research, mineral identification,
                and precise environmental analysis.
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: "1.2rem" }}>
                Typically uses a few (around 3 to 15) distinct bands.
              </td>
              <td style={{ fontSize: "1.2rem" }}>
                Focuses on specific, predefined bands within the spectrum.
              </td>
              <td style={{ fontSize: "1.2rem" }}>
                Yields simpler datasets, facilitating easier processing and
                analysis.
              </td>
              <td style={{ fontSize: "1.2rem" }}>
                Relies on sensors designed for specific bands, making them more
                operationally practical.
              </td>
              <td style={{ fontSize: "1.2rem" }}>
                Suited for broader applications like land cover classification,
                vegetation health assessment, and environmental monitoring.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container  , d-flex justify-content-start">
        <h2>
         
           Summary
        </h2>
      </div>
      <div className="container , d-flex justify-content-center">
        <p style={{ textAlign: "justify" }}>
          
            Hyperspectral remote sensing involves capturing high-resolution data
            across a wide and continuous range of the electromagnetic spectrum,
            providing detailed information for scientific research and specific
            applications like mineral identification. In contrast, multispectral
            remote sensing captures data in a limited number of predefined
            bands, offering a more practical and cost-effective approach for
            applications such as land cover classification and environmental
            monitoring. While hyperspectral provides intricate spectral details,
            multispectral strikes a balance between spectral information and
            operational efficiency, catering to a broader range of uses. The
            choice between them depends on the specific requirements of the
            remote sensing task and the level of spectral resolution needed.
          
        </p>
      </div>
    </>
  );
}

export default MultiSpectral;
