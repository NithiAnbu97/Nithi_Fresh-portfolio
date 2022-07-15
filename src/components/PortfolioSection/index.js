import React from "react";
import "./Portfolio.css";
import * as SiIcons from "react-icons/si";
import bike from "../../Images/bike.png";
import food from "../../Images/food.png";
import shop from "../../Images/shop.png";
import zoom from "../../Images/zoom.png";
import stackoverflow from "../../Images/stackoverflow.png";
import url from "../../Images/url.png";

function Portfolio() {
  return (
    <div id="portfolio">
      <h1 className="logo-text">My Recent Works</h1>
      <div className="allProjects">
        <div className="card" data-aos="zoom-in-up">
          <img src={shop} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Shopping Application</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Online Shop</div>
            <div className="img-description">
              <p>
                Application system follows complete authentication for Login,
                Registration, Payment and authentication
              </p>
              <p>
                Users can add new products to their account cart, and also
                Delete the added products on Cart.
              </p>
              <p>
                We have used MERN stack to make this project.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                   <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/NithiAnbu97/Shopping_Front"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  {/* <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://https://github.com/NithiAnbu97/Shopping_Back"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>  */}
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://super-baklava-efcbeb.netlify.app/"
                  >
                    Live-Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={food} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Recipe App</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">My food</div>
            <div className="img-description">
              <p>
                Application system follows complete authentication for Login,
                Registration, Payment and authentication
              </p>
              <p>
                I have created this project for the Recipes. 
                So basically this is a website which uses different data like different food variety in India. 
                We have used MERN stack to make this project.

              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                   <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/NithiAnbu97/Recipe-_Front"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  {/* <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/NithiAnbu97/Recipe-_Back"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>  */}
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://nimble-sfogliatella-cd2023.netlify.app/"
                  >
                    Live-Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={zoom} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Video Chat App</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">zoom</div>
            <div className="img-description">
              <p>
              I have created this project for live video chatting. 
              I have created this project using MERN stack and socket.io.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/NithiAnbu97/Zoom_Front"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  {/* <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/NithiAnbu97/Zoom_Back"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>  */}
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://radiant-starburst-a531b3.netlify.app/"
                  >
                    Live-Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={bike} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Bike Blog</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Blogit</div>
            <div className="img-description">
              <p>
              I have created this project for the Bikes. 
              So basically this is a website which uses different data like different bike models in the world. 
              We have used MERN stack to make this project.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                   <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/NithiAnbu97/Bike_Blog_App_Front"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  {/* <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/NithiAnbu97/Bike_Blog_App_Back"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>  */}
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://sparkly-valkyrie-825348.netlify.app/"
                  >
                  Live-Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={stackoverflow} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Stack Over Flow Clone</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">stack over flow</div>
            <div className="img-description">
              <p>
              A responsive stack overflow clone with all CRUD operations for questions, answers, and comments 
              along with important features like searching, voting, and tags. 
              We have used MERN stack to make this project.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                   <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/NithiAnbu97/Hack-2-Frontend"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  {/* <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/NithiAnbu97/Hack-2-Backend"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>  */}
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://stack-overflow-react.netlify.app/"
                  >
                    Live-Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={url} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">URL Shortener</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">url short</div>
            <div className="img-description">
              <p>
              ShortURL is a url shortener to reduce a long link.
              Use our tool to shorten links and then share them, 
              in addition you can monitor traffic statistics. 
              We have used MERN stack to make this project.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/NithiAnbu97/URL_Shortner_Front"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                {/* <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/NithiAnbu97/URL_Shortner_Back"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>  */}
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://sunny-melba-34f0c9.netlify.app/login"
                  >
                   Live-Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
