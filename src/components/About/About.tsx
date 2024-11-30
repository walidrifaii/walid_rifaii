import { Container } from "./styles";
import walidRifaii from "../../assets/walid.png";
import laravel from "../../assets/laravel-svgrepo-com (1).svg";
import tailwind from "../../assets/tailwindcss-icon-svgrepo-com.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
      <ScrollAnimation animateIn="fadeInLeft">
  <h2>About me</h2>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
  <p>
    Hello! My name is Walid Rifaii, a passionate MERN stack developer with a strong focus on modern web technologies. I specialize in using TypeScript, Laravel, and TailwindCSS to create scalable, responsive, and user-friendly web applications.
  </p>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
  <p>
    With a comprehensive understanding of front-end and back-end development, I aim to deliver efficient and impactful solutions tailored to meet my clients' unique requirements.
  </p>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
  <p>
    Whether you need a brand-new web application or want to enhance your existing project, I'm here to bring your vision to life with cutting-edge technologies and industry best practices.
  </p>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
  <h3>Here are my main skills:</h3>
</ScrollAnimation>

        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={laravel} alt="Wordpress" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={tailwind} alt="shopify" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={walidRifaii} alt="Vinayak Singh" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
