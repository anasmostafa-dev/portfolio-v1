import "./Contact.css";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { Button, Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section id="contact" className="contactMe">
      <div data-aos="fade-up">
        <Typography
          variant="h3"
          sx={{ fontWeight: "800", textAlign: "center", paddingTop: "60px" }}
        >
          Contact<span>&nbsp;Me</span>
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", color: "#8d8d8d", marginTop: "25px" }}
        >
          Have a project in mind or want to discuss opportunities? I'm always
          open to talking about creative ideas and new projects.
        </Typography>
      </div>
      <div className="contact">
        <div className="box" data-aos="fade-up">
          <Typography sx={{ color: "#8756f3", marginBottom: "20px" }}>
            <EmailIcon />
          </Typography>
          <p style={{ color: "#8d8d8d", fontSize: "12px", fontWeight: "400" }}>
            Email
          </p>
          <a
            href="mailto:anas.mostafa.dev@gmail.com?subject=Hello Anas&body=I want to contact you"
            style={{ fontSize: "16px", textDecoration: "none", color: "#fff" }}
          >
            anas.mostafa.dev@gmail.com
          </a>
        </div>

        <div className="box" data-aos="fade-up">
          <Typography sx={{ color: "#8756f3", marginBottom: "20px" }}>
            <LocationOnIcon />
          </Typography>
          <p style={{ color: "#8d8d8d", fontSize: "12px", fontWeight: "400" }}>
            Location
          </p>
          <p style={{ fontSize: "16px" }}>Al-Sharqia, Egypt</p>
        </div>

        <div className="box" data-aos="fade-up">
          <Typography sx={{ color: "#8756f3", marginBottom: "20px" }}>
            <PhoneEnabledIcon />
          </Typography>
          <p style={{ color: "#8d8d8d", fontSize: "12px", fontWeight: "400" }}>
            Phone
          </p>
          <a
            href="tel:+201032503498"
            style={{ fontSize: "16px", textDecoration: "none", color: "#fff" }}
          >
            +201032504598
          </a>
        </div>
      </div>

      <div className="iconsss">
        <a href="https://github.com/anasmostafa-dev" target="_blank">
          <SiGithub color="#fff" size={14} />
        </a>
        <a
          href="https://www.linkedin.com/in/anas-mostafa-015858207/"
          target="_blank"
        >
          <SiLinkedin color="#fff" size={14} />
        </a>
        <a
          href="https://www.instagram.com/anas.gad12?igsh=enNjdWFrZHlsdnN1"
          target="_blank"
        >
          <SiInstagram color="#fff" size={14} />
        </a>
        <a href="https://wa.me/201032503498" target="_blank">
          <SiWhatsapp color="#fff" size={14} />
        </a>
      </div>
      <Box display="flex" justifyContent="center">
        <Button
          sx={{ background: "teal", padding: "15px 20px" }}
          href="https://wa.me/201032503498"
          variant="contained"
        >
          Start Conversation
        </Button>
      </Box>

      <footer
        style={{
          background: "rgba(255, 255, 255, 0.04)",
          color: "#ffffff9c",
          textAlign: "center",
          padding: "25px",
          marginTop: "70px",
          paddingTop: "35px",
        }}
      >
        © 2025 Anas Mostafa. All rights reserved.
      </footer>
    </section>
  );
}
