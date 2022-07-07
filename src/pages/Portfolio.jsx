import { Header } from "../components";
import { Box, Container, Grid } from "@mui/material";
import { Card } from "../components";
import { data } from "../data/data";
import { motion } from "framer-motion";

const container = {
  initial: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const child = {
  initial: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Portfolio = () => {
  return (
    <Box
      id="portfolio"
      sx={{ backgroundColor: "secondary.main", minHeight: "100vh" }}
    >
      <Header title="Portfolio" />
      <Container sx={{ padding: "30px" }}>
        <Grid
          container
          spacing={3}
          component={motion.div}
          variants={container}
          initial="initial"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.map((item) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              id={item.title}
              key={item.title}
              component={motion.div}
              variants={child}
            >
              <Card item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;
