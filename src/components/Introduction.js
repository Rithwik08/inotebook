import React from "react";

function Introduction() {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-6">
          <img
            src="https://images.unsplash.com/photo-1579159278991-f698b0667a16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVtb3RlJTIwc2Vuc2luZ3xlbnwwfHwwfHx8MA%3D%3D"
            className=" d-block w-100 h-60"
            alt="..."
          />
        </div>
        <div className="col-6">
          <h1>
            <b>What is Remote Sensing?</b>
          </h1>
          <p style={{textAlign:"justify"}}>
            Remote sensing is defined as the study of target properties on the
            Earth's surface without making actual physical contact with it.
            Generally, the data is acquired from either the aircraft or
            satellite. The purpose of acquiring remote sensing image data is to
            be able to identify and assess, by some means, surface materials and
            their spatial properties.
        
          <br />
            There exist two main types of remote sensing classified according to
            the source of signal they use to explore the object, active vs.
            passive. Active remote sensing instruments operate with their own
            source of emission or light, while passive ones rely on the
            reflected one. Radiation also differs by wavelengths that fall into
            short (visible,NIR, MIR) and long (microwave).
            <br />
            Passive sensors in remote sensing do not streamline energy of their
            own to the researched object or surface, unlike active ones. Passive
            remote sensing depends on natural energy (sunrays) bounced by the
            target. For this reason, it can be applied only with proper
            sunlight, otherwise there will be nothing to reflect.
            <br/>
            Another facet of remote sensing involves employing sonar systems on ships to generate detailed images of the ocean floor without the need for direct exploration. This technology has significantly contributed to our understanding of underwater topography, including features such as massive mountain ranges, deep canyons, and the intriguing "magnetic striping" phenomenon.

          </p>
        </div>
      </div>
      <figure className="text-center">
  <blockquote className="blockquote">
    <p className="text-muted">THE APPLICATION OF GIS IS LIMITED ONLY BY THE IMAGINATION OF THOSE WHO USE IT </p>
  </blockquote>
  <figcaption className="blockquote-footer">
    JACK DANGERMOND <cite title="Source Title"></cite>
  </figcaption>
</figure>
<p style={{textAlign:"justify"}}>

In summary, remote sensing provides a potent means of observing and understanding our planet from a distance. Its applications range from immediate, practical uses such as disaster management to contributing valuable data for broader scientific research and exploration.</p>
    </div>
    
  );
}

export default Introduction;
