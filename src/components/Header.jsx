import { Box, Typography } from "@mui/material";
import line from "../assets/line.png";
import { motion } from "framer-motion";
const Header = ({ title }) => {
  return (
    <Box
      sx={{ textAlign: "center" }}
      component={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Typography variant="h2" pt={3}>
        {title}
      </Typography>
      <img src={line} alt="line" className="line" />
    </Box>
  );
};

export default Header;
