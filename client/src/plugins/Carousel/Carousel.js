import React from "react"
import { Carousel } from "react-responsive-carousel"


export default () => (
  <div style={{ height: '500px' }}>
    <Carousel>
      <div>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80"
        />
        <p className="legend">Photo 1</p>
      </div>
      <div>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        />
        <p className="legend">Photo 2</p>
      </div>
      <div>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1554188248-986adbb73be4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        />
        <p className="legend">Photo 3</p>
      </div>
    </Carousel>
  </div>
)
