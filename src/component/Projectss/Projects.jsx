import "./Project.css";
import { Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import IosShareIcon from "@mui/icons-material/IosShare";
import {
  SiAxios,
  SiCss3,
  SiFramer,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiPostman,
  SiReact,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section id="projects" className="containerProjects">
      <div data-aos="fade-up">
        <Typography
          variant="h4"
          sx={{
            textDecoration: "underline",
            textDecorationThickness: "5px",
            textUnderlineOffset: "20px",
            textDecorationColor: "#8756f3",
            textAlign: "center",
            marginTop: "60px",
            marginBottom: "40px",
            fontWeight: "800",
            "@media (max-width: 768px)": {
              fontSize: "30px",
              textDecorationThickness: "3px",
              textUnderlineOffset: "14px",
            },
          }}
        >
          Latest Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#8d8d8d", textAlign: "center" }}
        >
          A selection of featured projects I've worked on, along with other
          projects demonstrating my skills.
        </Typography>
      </div>
      <Typography
        data-aos="fade-left"
        variant="h6"
        sx={{ marginTop: "60px", fontWeight: "700" }}
      >
        Recent Projects
      </Typography>
      <hr></hr>
      <div className="cards" data-aos="fade-up">
        <Card
          sx={{
            background: "#19192f7e",
            borderRadius: "20px",
            gap: "10px",
            display: "flex",
            flexWrap: "wrap",
            flexGrow: "1",
            flexDirection: "column",
            "@media (min-width: 769px) and (max-width: 1024px))": {
              maxWidth: "600px",
            },
          }}
        >
          <CardMedia
            sx={{
              transition: "all .4s ease",
              height: 300,
              "&:hover": { transform: "scale(1.04)" },
            }}
            image="/weather.png"
            title="Weather App"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              sx={{ fontWeight: "600" }}
              variant="h5"
              color="#fff"
              component="div"
            >
              Weather App
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
              <p className="iconss">
                <SiReact />
                React
              </p>
              <p className="iconss">
                <SiJavascript />
                JavaScript
              </p>

              <p className="iconss">
                <SiAxios />
                Axios
              </p>
              <p className="iconss">
                <SiPostman />
                Postman
              </p>
              <p className="iconss">
                <SiMui />
                Material-ui
              </p>
            </div>
          </CardContent>
          <CardActions
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              alignItems: "flex-end",
            }}
          >
            <Button
              href="https://my-weather-appv2.netlify.app/"
              sx={{ color: "#fff", background: "#8756f3" }}
            >
              Live&nbsp;
              <IosShareIcon fontSize="small" />
            </Button>
            <Button
              sx={{ color: "#fff", background: "#8d8d8d30" }}
              href="https://github.com/anasmostafa-dev/weather-app"
            >
              Code&nbsp;
              <SiGithub />
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            background: "#19192f7e",
            borderRadius: "20px",
            gap: "10px",
            display: "flex",
            flexDirection: "column",
            "@media (min-width: 769px) and (max-width: 1024px)": {
              maxWidth: "600px",
            },
          }}
        >
          <CardMedia
            sx={{
              transition: "all .4s ease",
              height: 300,
              "&:hover": { transform: "scale(1.04)" },
            }}
            image="/todos.png"
            title="ToDo App"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              sx={{ fontWeight: "600" }}
              variant="h5"
              color="#fff"
              component="div"
            >
              ToDo App
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
              <p className="iconss">
                <SiFramer />
                Framer Motion
              </p>
              <p className="iconss">
                <SiReact />
                React
              </p>
              <p className="iconss">
                <SiJavascript />
                JavaScript
              </p>

              <p className="iconss">
                <SiReact />
                Context API
              </p>
              <p className="iconss">
                <SiMui />
                Material-ui
              </p>
            </div>
          </CardContent>
          <CardActions sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <Button
              href="https://todoapp-v3.netlify.app"
              sx={{ color: "#fff", background: "#8756f3" }}
            >
              Live&nbsp;
              <IosShareIcon fontSize="small" />
            </Button>
            <Button
              sx={{ color: "#fff", background: "#8d8d8d30" }}
              href="https://github.com/anasmostafa-dev/to-do-app"
            >
              Code&nbsp;
              <SiGithub />
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            background: "#19192f7e",
            borderRadius: "20px",
            gap: "10px",
            display: "flex",
            flexDirection: "column",
            "@media (min-width: 769px) and (max-width: 1024px)": {
              maxWidth: "600px",
            },
          }}
        >
          <CardMedia
            sx={{
              transition: "all .4s ease",
              height: 300,
              "&:hover": { transform: "scale(1.04)" },
            }}
            image="/crud.png"
            title="CRUD App"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              sx={{ fontWeight: "600" }}
              variant="h5"
              color="#fff"
              component="div"
            >
              CRUD
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
              <p className="iconss">
                <SiJavascript />
                JavaScript
              </p>
              <p className="iconss">
                <SiHtml5 />
                HTML5
              </p>
              <p className="iconss">
                <SiCss3 />
                CSS3
              </p>
            </div>
          </CardContent>
          <CardActions sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <Button
              href="https://anasmostafa-dev.github.io/crud-app/"
              sx={{ color: "#fff", background: "#8756f3" }}
            >
              Live&nbsp;
              <IosShareIcon fontSize="small" />
            </Button>
            <Button
              sx={{ color: "#fff", background: "#8d8d8d30" }}
              href="https://github.com/anasmostafa-dev/crud-app"
            >
              Code&nbsp;
              <SiGithub />
            </Button>
          </CardActions>
        </Card>
      </div>
    </section>
  );
}
