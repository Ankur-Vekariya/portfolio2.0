import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      <div
        style={{
          width: "50%",
        }}
      >
        <div class="container">
          <div class="card card1">
            <div class="border">
              <h2>Ben Stiller</h2>
              <div class="icons">
                <i class="fa fa-codepen" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-dribbble" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#A7C7E7",
          width: "50%",
          maxHeight: "50%",
          alignContent: "end",
          textAlign: "end",
        }}
      >
        <p
          style={{
            color: "whitesmoke",
            textOrientation: "upright",
            writingMode: "vertical-lr",
            fontFamily: "cursive",
            fontWeight: "bolder",
          }}
        >
          ANKUR
        </p>
        <p
          style={{
            textOrientation: "upright",
            writingMode: "vertical-lr",
            fontFamily: "cursive",

            fontWeight: "bolder",
          }}
        >
          VEKARIYA
        </p>
      </div>
    </div>
  );
};

export default Hero;
