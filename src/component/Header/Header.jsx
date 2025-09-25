import "./Header.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function Header() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [activeLink, setActivelink] = useState("home");

  return (
    <>
      <div className="header-glow"></div>
      <div className="header">
        <div
          className="name"
          data-aos="zoom-in"
          style={{ display: isMobileMenuOpen ? "none" : "block" }}
        >
          Anas<span>.</span>
        </div>

        <div className="links" data-aos="zoom-in">
          <div className="hamburger" onClick={toggleMenuOpen}>
            {!isMobileMenuOpen ? <MenuIcon /> : <CloseIcon />}
          </div>
          <div className={`links-container ${isMobileMenuOpen ? "open" : ""}`}>
            <div className="links-glow"></div>
            <a
              onClick={() => {
                setActivelink("home");
                setIsMobileMenuOpen(false);
              }}
              className={activeLink === "home" ? "active" : ""}
              href="#"
            >
              Home
            </a>
            <a
              onClick={() => {
                setActivelink("about");
                setIsMobileMenuOpen(false);
              }}
              className={activeLink === "about" ? "active" : ""}
              href="#About"
            >
              About
            </a>
            <a
              onClick={() => {
                setActivelink("skills");
                setIsMobileMenuOpen(false);
              }}
              className={activeLink === "skills" ? "active" : ""}
              href="#skills"
            >
              Skills
            </a>
            <a
              onClick={() => {
                setActivelink("projects");
                setIsMobileMenuOpen(false);
              }}
              className={activeLink === "projects" ? "active" : ""}
              href="#projects"
            >
              Projects
            </a>
            <a
              onClick={() => {
                setActivelink("contact");
                setIsMobileMenuOpen(false);
              }}
              className={activeLink === "contact" ? "active" : ""}
              href="#contact"
            >
              Contact
            </a>
            <div className="linkss">
              <a href="https://github.com/anasmostafa-dev" target="_blank">
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/anas-mostafa-015858207/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>

              <IconButton onClick={handleClick}>
                <MoreVertIcon style={{ color: "#8d8d8d" }} />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    borderRadius: "12px",
                    backgroundColor: "#0E0E1B",
                    color: "#c3c3c3ff",
                  },
                }}
              >
                <MenuItem onClick={handleClose}>
                  <a
                    className="menuHover"
                    href="https://www.instagram.com/anas.gad12?igsh=enNjdWFrZHlsdnN1"
                    target="_blank"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    <InstagramIcon />
                  </a>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <a
                    className="menuHover"
                    href="https://www.tiktok.com/@anas.gad12?_r=1&_d=ei3he30gb8ibh1&sec_uid=MS4wLjABAAAAqVH_FjN-nLdbLGvr2VdQR9zdPx8Mc2vOfVEWhC5260Q0fTg4N4qkiAOxZIyriyxy&share_author_id=6943320918945678342&sharer_language=ar&source=h5_m&u_code=dhj4glcl6cac83&timestamp=1758360643&user_id=6943320918945678342&sec_user_id=MS4wLjABAAAAqVH_FjN-nLdbLGvr2VdQR9zdPx8Mc2vOfVEWhC5260Q0fTg4N4qkiAOxZIyriyxy&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7550005869367297800&share_link_id=bd68a0b8-1e1c-4535-8f4c-dc103ae0ef8e&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb4907&social_share_type=5&enable_checksum=1"
                    target="_blank"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    <MusicNoteIcon />
                  </a>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
