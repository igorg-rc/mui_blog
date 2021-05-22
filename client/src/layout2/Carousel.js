import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (

  <Carousel autoPlay>
    <div>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1559102877-4a2cc0e37fce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=952&q=80"
      />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1415&q=80"
      />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1589030343991-69ea1433b941?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      />
      <p className="legend">Legend 1</p>
    </div>
  </Carousel>
)
