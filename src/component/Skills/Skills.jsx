import "./Skills.css";
import { Typography } from "@mui/material";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMui,
  SiRedux,
  SiStyledcomponents,
  SiEslint,
  SiPrettier,
  SiVite,
  SiNpm,
  SiRender,
  SiNodedotjs,
  SiGithub,
  SiNetlify,
} from "react-icons/si";
import PaletteIcon from "@mui/icons-material/Palette";
import TerminalIcon from "@mui/icons-material/Terminal";
import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
import BuildIcon from "@mui/icons-material/Build";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <section id="skills" className="container">
      <div data-aos="fade-up">
        <Typography
          sx={{
            textDecoration: "underline",
            textDecorationThickness: "5px",
            textUnderlineOffset: "20px",
            textDecorationColor: "#8756f3",
            textAlign: "center",
            marginBottom: "40px",
            fontWeight: "900",
            "@media (max-width: 768px)": {
              fontSize: "30px",
              textDecorationThickness: "3px",
              textUnderlineOffset: "12px",
            },
          }}
          variant="h3"
        >
          My Skils
        </Typography>
        <Typography
          sx={{
            color: "#8d8d8d",
            textAlign: "center",
            width: "90%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          I've worked with a variety of technologies in front-end development.
          Here are some of my key areas of expertise:
        </Typography>
      </div>
      <div className="mySkillsContainer">
        <div className="box" data-aos="zoom-in">
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "30px",
              marginBottom: "15px",
            }}
          >
            <SiReact color="#8756f3" />
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "800" }}>
            Front-End Development
          </Typography>
          <Typography
            sx={{ color: "#8d8d8d", fontSize: "13px" }}
            variant="body1"
          >
            Building responsive and optimized web applications with modern
            frameworks.
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              padding: "5px",
              gap: "8px",
            }}
          >
            <p className="icons">
              <SiHtml5 />
              &nbsp;HTML5
            </p>
            <p className="icons">
              <SiCss3 />
              &nbsp;CSS3
            </p>
            <p className="icons">
              <SiJavascript />
              &nbsp;JavaScript
            </p>
            <p className="icons">
              <SiMui />
              &nbsp;Martrial-Ui
            </p>
            <p className="icons">
              <SiReact />
              &nbsp;React
            </p>
            <p className="icons">
              <SiRedux />
              &nbsp;Redux
            </p>
          </div>
        </div>

        <div className="box" data-aos="zoom-in">
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "30px",
              marginBottom: "15px",
              color: "#8756f3",
            }}
          >
            <PaletteIcon />
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "800" }}>
            Styling & UI Frameworks
          </Typography>
          <Typography
            sx={{ color: "#8d8d8d", fontSize: "13px" }}
            variant="body1"
          >
            Crafting modern and maintainable UI components with efficient
            styling techniques.
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              padding: "5px",
              gap: "8px",
            }}
          >
            <p className="icons">
              <SiMui />
              &nbsp;Material-Ui
            </p>
            <p className="icons">
              <SiCss3 />
              &nbsp;CSS Modules
            </p>
            <p className="icons">
              <SiStyledcomponents />
              &nbsp; Styled Component
            </p>
          </div>
        </div>

        <div className="box" data-aos="zoom-in">
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "30px",
              marginBottom: "15px",
              color: "#8756f3",
            }}
          >
            <PlaylistAddCheckCircleIcon />
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "800" }}>
            State Management
          </Typography>
          <Typography
            sx={{ color: "#8d8d8d", fontSize: "13px" }}
            variant="body1"
          >
            Handling application state efficiently for scalable applications.
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              padding: "5px",
              gap: "8px",
            }}
          >
            <p className="icons">
              <SiReact />
              &nbsp;Context Api
            </p>
            <p className="icons">
              <SiRedux />
              &nbsp;Redux / Redux Toolkit
            </p>
          </div>
        </div>

        <div className="box" data-aos="zoom-in">
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "30px",
              marginBottom: "15px",
              color: "#8756f3",
            }}
          >
            <TerminalIcon />
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "800" }}>
            Back-End Integration
          </Typography>
          <Typography
            sx={{ color: "#8d8d8d", fontSize: "13px" }}
            variant="body1"
          >
            Connecting front-end applications to databases and back-end
            services.
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              padding: "5px",
              gap: "8px",
            }}
          >
            <p className="icons">
              <SiNodedotjs />
              &nbsp;Currently learning Back-End Development with Node.js &
              Express
            </p>
          </div>
        </div>

        <div className="box" data-aos="zoom-in">
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "30px",
              marginBottom: "15px",
              color: "#8756f3",
            }}
          >
            <BuildIcon />
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "800" }}>
            Development Tools
          </Typography>
          <Typography
            sx={{ color: "#8d8d8d", fontSize: "13px" }}
            variant="body1"
          >
            Optimizing workflows with modern development and build tools.
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              padding: "5px",
              gap: "8px",
            }}
          >
            <p className="icons">
              <SiEslint />
              &nbsp; Eslint
            </p>
            <p className="icons">
              <SiPrettier />
              &nbsp;Prettier
            </p>
            <p className="icons">
              <SiVite />
              &nbsp;Vite
            </p>
            <p className="icons">
              <SiNpm />
              &nbsp;Npm
            </p>
          </div>
        </div>

        <div className="box" data-aos="zoom-in">
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "30px",
              marginBottom: "15px",
            }}
          >
            <SiRender color="#8756f3" />
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "800" }}>
            Version Control & Deployment
          </Typography>
          <Typography
            sx={{ color: "#8d8d8d", fontSize: "13px" }}
            variant="body1"
          >
            Managing code collaboration and deploying applications efficiently.
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              padding: "5px",
              gap: "8px",
            }}
          >
            <p className="icons">
              <SiGithub />
              &nbsp;GitHub
            </p>
            <p className="icons">
              <SiNetlify />
              &nbsp;Netlify
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
