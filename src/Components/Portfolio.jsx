/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/fog.jpg";

const imageAltText = "This is a fog image.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Blog Website",
    description:
      "This is my blog website where I write about my experience and learnings in the tech industry.",
    url: "https://shreyasaini003.github.io/Music_Player/",
  },
  {
    title: "Age Calculator App using Python Tkinter",
    description:
      "This is a Age Calculator app which I created using python library Tkinter. Here is th egithub link for the same.",
    url: "https://github.com/shreyasaini003/AgeCalculator/blob/main/age-calculator.py",
  },
  {
    title: "Stock prediction Project",
    description:
      "Created using Python, I made Stock Prediction Program. Github link for the same is given below.",
    url: "https://github.com/shreyasaini003/stock_prediction",
  },
  {
    title: "Playlist where i learnt web development from",
    description:
      "This is playlist where i started learning web development initially.",
    url: "https://youtu.be/Q8FUQawC_1I?feature=shared",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
