import { Box, Container, Grid, Typography } from "@mui/material";
import { Header, Skill } from "../components";
import { motion } from "framer-motion";
import { skillsData, lib } from "../data/data";
const container = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const child = {
  show: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: 20,
  },
};

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{ backgroundColor: "secondary.main", minHeight: "100vh" }}
    >
      <Header title="Skills" />
      <Container sx={{ padding: "30px" }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography variant="h6" color="white" p={5} textAlign="center">
              Languages
            </Typography>
            <Grid
              container
              sx={{
                borderRight: { md: "2px solid white" },
                minHeight: "50vh",
                paddingRight: { md: 3 },
                alignItems: "center",
              }}
              component={motion.div}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {skillsData.map((skill) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  component={motion.div}
                  variants={child}
                >
                  <Skill title={skill.title} value={skill.value} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography variant="h6" color="white" my={5} textAlign="center">
              Library & Package
            </Typography>
            <Grid
              container
              sx={{
                minHeight: "50vh",
                paddingLeft: { md: 3 },
                alignItems: "center",
              }}
              component={motion.div}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.5 }}
            >
              {lib.map((item) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  component={motion.div}
                  variants={child}
                >
                  <Skill title={item.title} value={item.value} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
