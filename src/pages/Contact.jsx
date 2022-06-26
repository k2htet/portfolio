import { Header } from "../components";
import { Box, Container, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { BsFacebook } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { AiFillPhone, AiFillGithub } from "react-icons/ai";

const item = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: "primary.main",
      }}
    >
      <Header title="Contact" />
      <Container sx={{ padding: "50px" }}>
        <Stack
          justifyContent="center"
          alignItems="center"
          py={5}
          component={motion.div}
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box textAlign="center" mb={3}>
            <Typography variant="h3">
              Looking for a fulltime <br />
              junior <span style={{ color: "#FE6F27" }}>ReactJs</span>{" "}
              developer?
            </Typography>
            <Typography variant="h5" mt={1}>
              You <span style={{ color: "#FE6F27" }}>found</span>.
            </Typography>
          </Box>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="space-between"
            alignItems="center"
            component={motion.div}
            variants={item}
          >
            <a href="https://www.facebook.com/kokohtettt/">
              <BsFacebook size={35} />
            </a>
            <a href="mailto:kokohtet.dev@gmail.com">
              <CgMail size={37} />
            </a>
            <a href="tel:09962560377">
              <AiFillPhone size={35} />
            </a>
            <a href="https://github.com/k2htet">
              <AiFillGithub size={35} />
            </a>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;
