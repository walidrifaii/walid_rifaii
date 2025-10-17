import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                
                <a
                  href="https://e-shop-xf6x.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>{" "}
              </div>
            </header>
            <div className="body">
              <h3>
                E-Shop - Dynamic E-Commerce with Real-Time Seller-User
                Interaction
              </h3>
              <p>
                {" "}
                E-Shop is a cutting-edge e-commerce platform built with React,
                Tailwind CSS, and Material UI. It features a dynamic real-time
                messaging system powered by Socket.IO, enabling seamless
                communication between users and sellers. With integrated Stripe
                payments, cash on delivery options, and comprehensive dashboards
                for sellers and admins, users can easily manage products,
                orders, and events. This platform delivers a modern shopping
                experience with product ratings and full administrative control,
                enhancing convenience for both customers and merchants alike.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React</li> <li>Node.js</li> <li>TailwindCSS</li> <li>Material_UI</li> <li>Socket.IO</li> <li>MongoDb</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>
          <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://www.midad.com.sa"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Midad Real Estate</h3>
              <p>Developed a comprehensive admin panel for an e-commerce real estate platform with full CRUD functionality for managing property listings, enhanced with smooth, interactive animations for adding, updating, and deleting properties. Integrated image galleries and property details to provide a clear and engaging overview. Implemented secure authentication and role-based access control to ensure only authorized admins can manage listings. Built a responsive Next.js frontend with animated transitions to improve usability, streamline property management, and optimize workflow for administrative tasks.</p>

            </div>
            <footer>
              <ul className="tech-list">
                <li>Reactjs</li>
                <li>Laravel</li>
                <li>mysql</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/walidrifaii/Code-_Magnet" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a  href="https://code-magnet.vercel.app/"target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Code Magnet</h3>
              <p>
              This project is a responsive  portfolio website built with React.js, styled with CSS, and enhanced with smooth animations using Framer Motion
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Framer motion</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://gega-bite.vercel.app" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Gega Bite Menu</h3>
<p>Developed a dynamic restaurant menu management system with full CRUD functionality for dishes, integrated image uploads, and real-time data retrieval via a RESTful API using Express.js. Implemented secure authentication and role-based access control for admin management, optimized data storage with a structured database schema, and created a responsive Next.js frontend for seamless browsing of menu items, descriptions, prices, and images to enhance user experience and streamline menu updates.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Nextjs</li>
                <li>TailwindCss</li>
                <li>Nodejs</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://www.thanderball.shop/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>
                 thanderball.shop - Your Trusted T_shirt  Store
              </h3>
              <p>Developed a football-themed e-commerce platform using Shopify to sell customizable T-shirts, integrating a user-friendly storefront with dynamic product listings, detailed descriptions, and high-quality images. Implemented seamless payment processing, inventory management, and order tracking, while leveraging Shopify's built-in features for marketing, discounts, and customer engagement. Designed a responsive, visually appealing frontend to enhance shopping experience and streamline purchase flow for football fans worldwide.</p>

            </div>
            <footer>
              <ul className="tech-list">
                <li>Shopify</li>
              
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
              <a href="https://github.com/walidrifaii/3D" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://loquacious-klepon-00d255.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>3D</h3>
              <p>
              a creative web developer passionate about blending design and functionality. I specialize in building captivating websites using HTML and CSS, paired with stunning 3D visuals powered by Spline.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Spline</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

       

      </div>
    </Container>
  );
}