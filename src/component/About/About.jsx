import "./About.css";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import AccessibilityNewIcon from "@mui/icons-material/Accessibility";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ColorLensRoundedIcon from "@mui/icons-material/ColorLensRounded";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const isMobile = window.innerWidth <= 768;
  return (
    <section className="About" id="About">
      <div data-aos="fade-up">
        <Typography
          variant="h2"
          sx={{
            fontWeight: "900",
            paddingTop: "100px",
            display: "flex",
            justifyContent: "center",
            fontSize: isMobile ? "37px" : "55px",
          }}
        >
          About&nbsp;<span>Me</span>
        </Typography>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#8d8d8d",
            marginTop: "20px",
            marginBottom: "70px",
            textAlign: "center",
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Full-Stack Developer passionate about delivering scalable,
          high-performance, and user-centric digital solutions.
        </p>
      </div>
      <div className="divAboutMe" data-aos="fade-left">
        <div className="icon">
          <PersonIcon />
        </div>
        <div className="information">
          <Typography variant="h5" sx={{ fontWeight: "700" }}>
            Hello, i'm <span>Anas Mostafa</span>
            <br />
            <p
              style={{
                color: "#8d8d8d",
                fontSize: "15px",
                fontWeight: "500",
                lineHeight: "2.2",
                marginTop: "22px",
              }}
            >
              I’m a Computer Science student and
              <span> MERN Stack Developer</span> in training, specializing in
              building fast, intuitive, and visually engaging web applications.
              I work across the stack — from crafting clean, responsive UIs to
              developing scalable and efficient backends — with a strong focus
              on performance, scalability, and user experience.
            </p>
          </Typography>
        </div>
      </div>
      <div className="personalInfo">
        <Typography
          data-aos="fade-up"
          variant="h4"
          sx={{ fontSize: "25px", fontWeight: "700" }}
        >
          Personal Info
        </Typography>
        <div className="personal-Info" style={{ gap: "20px" }}>
          <div className="name" data-aos="fade-up">
            <Typography>
              <AccountBoxIcon />
            </Typography>
            <p
              style={{ color: "#8d8d8d", fontSize: "12px", fontWeight: "400" }}
            >
              Name
            </p>
            <p style={{ fontSize: "16px" }}>Anas Mostafa</p>
          </div>
          <div className="email" data-aos="fade-up">
            <Typography sx={{ color: "#afd63cff" }}>
              <EmailIcon />
            </Typography>
            <p
              style={{ color: "#8d8d8d", fontSize: "12px", fontWeight: "400" }}
            >
              Email
            </p>
            <p style={{ fontSize: "16px" }}>anas.mostafa.dev@gmail.com</p>
          </div>
          <div className="location" data-aos="fade-up">
            <Typography sx={{ color: "#4a2affff" }}>
              <LocationOnIcon />
            </Typography>
            <p
              style={{ color: "#8d8d8d", fontSize: "12px", fontWeight: "400" }}
            >
              Location
            </p>
            <p style={{ fontSize: "16px" }}>Al-Sharqia, Egypt</p>
          </div>
          <div className="status" data-aos="fade-up">
            <Typography sx={{ color: "#00d0ffff" }}>
              <SearchIcon />
            </Typography>
            <p
              style={{ color: "#8d8d8d", fontSize: "12px", fontWeight: "400" }}
            >
              Status
            </p>
            <p style={{ fontSize: "16px" }}>Open to opportunities</p>
          </div>
        </div>
      </div>

      <div className="divDevelopment">
        <Typography
          data-aos="fade-up"
          variant="h4"
          sx={{ fontSize: "23px", fontWeight: "700" }}
        >
          Development Philosophy
        </Typography>
        <div className="div-Development">
          <div className="performance" data-aos="fade-up">
            <Typography
              variant="h6"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <FlashOnIcon />
              <span>&nbsp;Performance First</span>
            </Typography>
            <Typography variant="body1">
              Optimized, scalable, and lightning-fast applications.
            </Typography>
          </div>

          <div className="Accessibility" data-aos="fade-up">
            <Typography
              variant="h6"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <AccessibilityNewIcon />
              <span>&nbsp;Accessibility Icon</span>
            </Typography>
            <Typography variant="body1">
              Building for everyone, regardless of ability.
            </Typography>
          </div>

          <div className="cleanCode" data-aos="fade-up">
            <Typography
              variant="h6"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <SettingsSuggestIcon />
              <span>&nbsp;Clean Code</span>
            </Typography>
            <Typography variant="body1">
              Maintainable, readable, and developer-friendly code.
            </Typography>
          </div>

          <div className="UserCenteredDesign" data-aos="fade-up">
            <Typography
              variant="h6"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <ColorLensRoundedIcon />
              <span>&nbsp;User-Centered Design</span>
            </Typography>
            <Typography variant="body1">
              Interfaces that delight and solve real problems.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
