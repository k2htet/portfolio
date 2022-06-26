import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "secondary.main" }}>
      <Container sx={{ padding: "15px" }}>
        <Box textAlign="center">
          <Typography variant="subtitle1" color="white">
            Reach me via{" "}
            <a
              href="mailto:kokohtet.dev@gmail.com"
              style={{ color: "#FE6F27" }}
            >
              kokohtet.dev@gmail.com
            </a>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
