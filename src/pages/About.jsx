import { Header } from "../components";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { kkh } from "../assets";

const container = {
  initial: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      duration: 0.5,
    },
  },
};
const child = {
  initial: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
const About = () => {
  return (
    <Box
      id="about"
      sx={{
        backgroundColor: "primary.main",
        minHeight: "100vh",
      }}
    >
      <Header title="About" />
      <Container sx={{ padding: "30px" }}>
        <Box
          sx={{
            borderLeft: "2px solid white",
            borderRight: "2px solid white",
            textAlign: "center",
            marginTop: "20px",
            padding: { xs: "20px", sm: "15px" },
          }}
          component={motion.div}
          variants={container}
          initial="initial"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box
            sx={{
              width: { xs: "70px", sm: "100px", md: "110px", lg: "150px" },
              margin: "auto",
              marginBottom: "20px",
            }}
            component={motion.div}
            variants={child}
          >
            <img
              src={kkh}
              alt="profile"
              className="about-img"
              width="100%"
              height="100%"
              loading="lazy"
            />
          </Box>

          <Typography
            variant="h2"
            my="10px"
            component={motion.h2}
            variants={child}
          >
            Ko Ko Htet
          </Typography>

          <Typography
            variant="h6"
            mb="20px"
            component={motion.h6}
            variants={child}
          >
            I’m develop user interface with React Js
            <br /> and some useful React package.
          </Typography>

          <Typography
            variant="p"
            sx={{ fontFamily: "Roboto", color: "white", lineHeight: "25px" }}
            mt="20px"
            component={motion.p}
            variants={child}
          >
            I'm a self-instructed programmer
            <br /> and one of the best features about me is being quite flexible
            <br /> in communication with people in almost every situations.
            <br /> Currently, I am learning and studying the advance concepts of
            (Js,React)
            <br /> which will significantly upgrade my current position and
            level.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
