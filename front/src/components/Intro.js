import React from "react";
import { TypeAnimation } from "react-type-animation";
import introImage from "../assets/Intro.png"; // Import your image

export default function Intro() {
  const introStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "0 auto", // Center the div horizontally
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
    maxHeight: "700px", // Set maximum height for the container
    overflow: "hidden", // Hide overflow content beyond maxHeight
    maxWidth: "400px",
    maxHeight: "200px",
    borderRadius: "4px",
  };

  const typeAnimationStyle = {
    fontSize: "2em",
    display: "inline-block",
    marginTop: "20px", // Add margin top for spacing between image and text
    marginBottom: "50px",
    height: "40px",
  };

  const imageStyling = {
    maxWidth: "400px", // Set maximum width for the image to ensure it fits within container
    maxHeight: "300px", // Maintain aspect ratio
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={typeAnimationStyle}>
        <TypeAnimation
          sequence={[
            "Transform your ingredients into delicious recipes with our interactive tool!",
            1000,
            "Enter your ingredients and discover personalized recipes.",
            1000,
            "Explore flavorful recipes based on your unique ingredients.",
            1000,
            "Create gourmet dishes from your pantry staples.",
            1000,
          ]}
          wrapper="span"
          speed={60}
          repeat={Infinity}
        />
      </div>
      <div style={introStyle}>
        <img
          src="https://www.bellavistaeats.com/wp-content/uploads/2019/10/AdobeStock_310893438-scaled.jpeg"
          alt="Description of the image"
          style={imageStyling}
        />
      </div>
    </div>
  );
}
