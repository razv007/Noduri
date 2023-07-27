import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

function Section1({history}) {
  function handle1()
  {
    console.log("ok")
    history.push("/Nod1")
  }
  return (
    <section
        className="contentSection"
        id="id1"
        style={{ background: "#dfc7a7" }}
      >
        <div className="content container">
          <div className="content-top">
            <h1 className="section-title">
              <span>No</span>duri Mon<span>tane</span>
            </h1>
          </div>
          <div className="content-bottom" >
            <div className="content-item" id="img1" onClick={handle}>
              <h2>Nodul 1</h2>
            </div>
            <div className="content-item">
              <h2>Socializare</h2>
            </div>
            <div className="content-item">
              <h2>Invatare</h2>
            </div>
            <div className="content-item">
              <h2>Utilitate</h2>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Section1