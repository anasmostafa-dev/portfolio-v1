import "./Hero.css";
import Typography from "@mui/material/Typography";
import { ReactTyped } from "react-typed";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiMui,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const isMobile = window.innerWidth <= 768;
  return (
    <section className="hero" id="Home">
      <div className="mainContent" data-aos="fade-left">
        <Typography
          className="main-Content"
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: "700",
            mb: "20px",
            mt: "20px",
            "@media (max-width: 768px)": {
              fontSize: "35px",
              fontFamily: "sans-serif",
              fontWeight: "800",
              marginBottom: isMobile ? "1px" : "100px",
            },
          }}
        >
          Hi, I'm{" "}
          <span>
            &nbsp;Anas <span className="lastName">Mostafa</span>
          </span>
        </Typography>
        <Typography
          variant="h4"
          sx={{
            mb: "30px",
            minHeight: isMobile ? "40px" : "100px",
            "@media (min-width: 769px) and (max-width: 1024px)": {
              minHeight: "40px",
            },
          }}
        >
          <span style={{ color: "#8d8d8d" }}>
            <ReactTyped
              strings={[
                "<span class='typed-text'>MERN Stack Developer</span>",
                "<span class='typed-text'>Specialized in React | Node.js</span>",
                "<span class='typed-text'>Building Modern Web Apps</span>",
              ]}
              typeSpeed={70}
              backSpeed={27}
              loop
            />
          </span>
        </Typography>
        <Typography>
          <p
            className="pargraphHero"
            style={{
              color: "#8d8d8d",
              fontSize: isMobile ? "16px" : "16px",
              letterSpacing: "1.5px",
              lineHeight: "1.3",
            }}
          >
            MERN Stack Developer focused on building secure, scalable, and
            high-performance web applications using React.js, Node.js, Express,
            and MongoDB. Passionate about clean code, modern architectures, and
            delivering seamless digital experiences.
          </p>
        </Typography>
        <Stack
          spacing={2}
          direction="row"
          sx={{
            mt: "40px",
            display: "flex",
            justifyContent: isMobile ? "center" : "flexStart",
          }}
        >
          <Button
            sx={{
              background: "#8756f3",
              borderRadius: "30px",
              padding: "6px 10px",
              transition: "all .3s ease",
              fontSize: isMobile ? "10px" : "14px",
              "&:hover": {
                background: "#6641b7ff",
                transform: "scale(1.05)",
                textShadow: "1px 1px 20px #fff",
              },
              "@media (max-width: 768px)": {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
            variant="contained"
            href="#projects"
          >
            View My Work
            <ArrowForwardIcon />
          </Button>
          <Button
            sx={{
              background: "transparent",
              padding: "6px 10px",
              borderRadius: "30px",
              color: "#fff",
              borderColor: "#888888ff",
              transition: "all .3s ease",
              fontSize: isMobile ? "10px" : "14px",
              "&:hover": {
                background: "#8856f311",
                borderColor: "#8856f365",
                transform: "scale(1.05)",
                textShadow: "1px 1px 20px #fff",
              },
            }}
            variant="outlined"
            href="#contact"
          >
            Contact Me
          </Button>
        </Stack>
        <p
          style={{
            color: "#8d8d8d",
            fontSize: "15px",
            marginTop: isMobile ? "25px" : "30px",
          }}
        >
          Tech I Work With:
        </p>
        <div className="tech">
          <p>
            <SiMongodb
              color="#47A248"
              size={20}
              style={{ marginRight: "5px" }}
            />
            MongoDB
          </p>
          <p>
            <SiExpress
              color="#000000ff"
              size={20}
              style={{ marginRight: "5px" }}
            />
            Express
          </p>
          <p>
            <SiReact color="#61DAFB" size={20} style={{ marginRight: "5px" }} />
            React
          </p>
          <p>
            <SiNodedotjs
              color="#339933"
              size={20}
              style={{ marginRight: "5px" }}
            />
            Node.js
          </p>
          <p>
            <SiMui color="#007FFF" size={20} style={{ marginRight: "5px" }} />
            MUi
          </p>
        </div>
      </div>
      <div className="imgPhoto" data-aos="fade-down">
        <img src="photo.webp" alt="my photo" />
      </div>
    </section>
  );
}
