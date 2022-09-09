import { Container, Stack, Typography, Box } from "@mui/material";

import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { ImCross } from "react-icons/im";
const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <Box
      id="home"
      sx={{
        backgroundColor: "primary.main",
      }}
      justifyContent="center"
      alignItems="center"
    >
      {!click && (
        <Container
          sx={{
            padding: "20px",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h3">K2HTET</Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={3}
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <a href="#about">
                <Typography variant="h5">About</Typography>
              </a>
              <a href="#skills">
                <Typography variant="h5">Skills</Typography>
              </a>
              <a href="#contact">
                <Typography variant="h5">Contact</Typography>
              </a>
            </Stack>

            <Box
              sx={{
                display: {
                  xs: "block",
                  sm: "block",
                  md: "none",
                  lg: "none",
                },
                cursor: "pointer",
              }}
              onClick={() => setClick((prev) => !prev)}
            >
              <AiOutlineMenu color="white" size={25} />
            </Box>
          </Stack>
        </Container>
      )}

      {click && (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          sx={{
            width: "100%",
            height: "100vh",
            position: "fixed",
            zIndex: "2",
            backgroundColor: "primary.main",
          }}
        >
          <a href="#about" onClick={() => setClick((prev) => !prev)}>
            <Typography variant="h5">About</Typography>
          </a>
          <a href="#skills" onClick={() => setClick((prev) => !prev)}>
            <Typography variant="h5">Skills</Typography>
          </a>
          <a href="#contact" onClick={() => setClick((prev) => !prev)}>
            <Typography variant="h5">Contact</Typography>
          </a>
          <Box
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
              },
              cursor: "pointer",
              position: "absolute",
              zIndex: 3,
              top: 0,
              right: 20,
            }}
            onClick={() => setClick((prev) => !prev)}
          >
            <ImCross color="white" size={25} />
          </Box>
        </Stack>
      )}
    </Box>
  );
};

export default Navbar;
