import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "initial" }}>
            Hi Everyone, I am <span className="purple">ABHIJIT TEMKAR </span>
            from <span className="purple"> Toronto ( Canada )</span>
            <br />
            <br />
            <p className="purple">Experience</p>
            <ul>
              <li>
                Software Developer at TATA Consultancy Services Limited ( TCS )
                , India
                <br />( Jul 2021 - Aug 2022 ).
              </li>
              <br />
              <li>
                Associate Analyst at XL Dynamics India Pvt. Ltd. , India
                <br />( Feb 2021 - May 2021 ).
              </li>
            </ul>
            <p className="purple">Education</p>
            <ul>
              <li>
                Post Graduate Degree Certificate in Mobile Application
                Development at Canadore College , Canada.
                <br />( Sep 2023 - Apr 2024)
              </li>
              <br />
              <li>
                Post Graduate Degree Certificate in Project Management at
                Sheridon College , Canada.
                <br />( Aug 2022 - Apr 2023)
              </li>
              <br />
              <li>
                Bachelors Of Engineering ( B.E ) in Civil Engineering at
                Savitribai Phule Pune University , India.
                <br />( Aug 2016 - Apr 2020)
              </li>
            </ul>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li> */}
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abhijit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
