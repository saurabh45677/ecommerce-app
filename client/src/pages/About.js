import React from "react";
import Layout from "../components/Layouts/Layout";
import aboutus from "../images/about.jpeg";

const About = () => {
  return (
    <Layout>
      <div className="row aboutus">
        <div className="col-md-6">
          <img src={aboutus} alt="aboutus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-6">
          <p className="about-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
