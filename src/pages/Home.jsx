import { Box, Stack, Typography, Button, Container } from "@mui/material";
import { BsArrowDown } from "react-icons/bs";
import { motion } from "framer-motion";
import profile from "../assets/profile.svg";

const Home = () => {
  return (
    <Stack
      minHeight="90vh"
      backgroundColor="primary.main"
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Container>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          justifyContent={{ md: "space-around", lg: "center" }}
          spacing={{ xs: 4, sm: 4, md: 3, lg: 10 }}
        >
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
              },
              justifyContent: "center",
              alignItems: "center",
            }}
            component={motion.div}
            initial={{ opacity: 0, y: "20px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={profile} alt="profile" className="profile" />
          </Box>
          <Box
            sx={{
              flexDirection: "column",
              display: "flex",
              alignItems: { md: "start", lg: "start" },
              justifyContent: "center",
              textAlign: { xs: "center", md: "start" },
            }}
            component={motion.div}
            initial={{ opacity: 0, x: "30px" }}
            whileInView={{ opacity: 1, x: "0px" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Typography variant="h2">
              Hello, I'm <span style={{ color: "#FE6F27" }}>Ko Ko Htet</span>
              <br />
              I'm a <span style={{ color: "#FE6F27" }}>Frontend</span> Web
              Developer
            </Typography>

            <a href="#portfolio" style={{ marginTop: "15px" }}>
              <Button
                variant="contained"
                sx={{
                  fontSize: {
                    sm: "1rem",
                    md: "1.2rem",
                    lg: "1.3rem",
                    xl: "2rem",
                  },
                }}
              >
                Take A Look
              </Button>
            </a>
          </Box>
        </Stack>
      </Container>

      <Typography
        mt={4}
        component={motion.p}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 2, repeat: "Infinity" }}
      >
        <BsArrowDown className="arrow" />
      </Typography>
    </Stack>
  );
};

export default Home;
