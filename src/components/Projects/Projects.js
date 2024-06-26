import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import game from "../../Assets/Projects/Gameplay.png";
import dobbyGallery from "../../Assets/Projects/dobby_gallery.png";
import newsApp from "../../Assets/Projects/newsApp.png";
import studynotion from "../../Assets/Projects/studynotion.png";
import hotel1 from "../../Assets/Projects/hotel1.jpeg";
import hotel2 from "../../Assets/Projects/hotel2.jpeg";
import {
  dobby_galleryGithubLink,
  ecommerce_appGithubLink,
  newsAppGithubLink,
  studynotionGithubLink,
  unity_gameGithubLink,
} from "../../constant";

const projectData = [
  {
    id: 1,
    imgPath: game,
    isBlog: false,
    title: "Endless Runner Game ( Unity )",
    description: [
      "Designed and developed an engaging endless runner game using Unity game engine.",
      "Created 3D game environments, characters, and obstacles using Unity's built-in tools and assets.",
      "Implemented game mechanics including player controls, scoring system, power-ups, and level progression.",
      "Integrated audio effects and background music to enhance gameplay experience.",
      "Optimized game performance and graphics for smooth gameplay across various devices.",
    ],
    ghLink: unity_gameGithubLink,
  },
  {
    id: 2,
    imgPath: newsApp,
    isBlog: false,
    title: "News App With Swift UI",
    description: [
      "Developed a news browsing iOS app independently using SwiftUI and Combine, showcasing proficiency in modern iOS development.",
      "Designed and implemented core features such as article fetching, favourites management, and sharing, emphasizing user-centric design.",
      "Integrated audio effects and background music to enhance gameplay experience.",
      "Optimized game performance and graphics for smooth gameplay across various devices.",
    ],
    ghLink: newsAppGithubLink,
  },
  {
    id: 3,
    imgPath: ecommerce,
    isBlog: false,
    title: "Ecommerce Website",
    description: [
      "Developed a fully functional e-commerce website using PHP, MySQL, HTML, CSS, and JavaScript.",
      "Designed and implemented user-friendly interfaces for product browsing, shopping cart management, and checkout processes.",
      "Designed and implemented user-friendly interfaces for product browsing, shopping cart management, and checkout processes.",
      "Integrated payment gateways such as PayPal for secure online transactions.",
      "Implemented backend functionalities including user authentication, order processing, and inventory management",
    ],
    ghLink: ecommerce_appGithubLink,
  },
  {
    id: 4,
    imgPath: dobbyGallery,
    isBlog: false,
    title: "Dobby Gallery",
    description: [
      "Implemented user registration and login functionality to provide users with personalized accounts, ensuring secure access to the platform.",
      "Integrated Cloudinary for seamless image uploading and storage, allowing users to effortlessly upload and manage their photos on the platform.",
      "Designed an interactive image grid interface for browsing uploaded photos, providing users with a visually appealing and intuitive browsing experience.",
      "Implemented a search bar for users to search for images based on their names or tags, enhancing accessibility and organization within the application.",
    ],
    demoLink: "https://dobby-gallery-app.vercel.app/",
    ghLink: dobby_galleryGithubLink,
  },
  {
    id: 5,
    imgPath: studynotion,
    isBlog: false,
    title: "Study Notion",
    description: [
      "Built a versatile ed-tech platform using the MERN stack (MongoDB, Express.js, React.js, Node.js), enabling seamless development and scalability.",
      "Crafted an intuitive user interface for content creation, consumption, and rating, ensuring an engaging learning experience for students.",
      "Enabled instructors to showcase their expertise and connect with learners globally, fostering a vibrant educational community.",
      "Implemented robust backend functionalities, including user authentication, content management, and analytics, ensuring smooth platform operation.",
    ],
    ghLink: studynotionGithubLink,
    demoLink: "https://studynotion-app-one.vercel.app/",
  },
  {
    id: 6,
    imgPath: hotel2,
    isBlog: false,
    title: "Hotel IQ",
    description: [
      "Developed a comprehensive hotel management android application allowing administrators to register and authenticate employees, ensuring secure access to sensitive data within the app.",
      "Implemented CRUD functionality for managing employee details, room allocations, customer information, and staff profiles, providing users with full control over their data.",
      "Integrated SQLite database for efficient storage and retrieval of data.",
      "Designed intuitive user interfaces for managing employee, room, customer, and staff details, optimizing user experience.",
    ],
    ghLink: "https://github.com/abhijittemkar/HotelIQ",
  },
];
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectData.map((project) => (
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
