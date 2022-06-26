import { Box, Typography, Stack, Button } from "@mui/material";

const Card = ({ item }) => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: { sx: "50%", sm: "60%", md: "80%", lg: "100%" },
        height: "auto",
        color: "white",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "10px 10px 0px 0px rgba(31,31,31,0.24)",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          border: "2px solid white",
          borderRadius: "10px",
          padding: "5px",
        }}
      >
        <img
          src={item.img}
          alt="portfolio img"
          width="100%"
          height="200px"
          loading="lazy"
        />
      </Box>
      <Box mt="20px">
        <Typography variant="h6">{item.title}</Typography>
        <Typography variant="p" sx={{ fontFamily: "Roboto" }}>
          {item.des}
        </Typography>
      </Box>
      <div
        style={{
          width: "50%",
          height: "1px",
          background: "white",
          margin: "20px 0px",
        }}
      />
      <Box>
        <Typography variant="h6">Frameworks</Typography>
        <Typography variant="p" sx={{ fontFamily: "Roboto" }}>
          {item.lang.map((lang) => lang)}
        </Typography>
      </Box>
      <Typography variant="p">Responsive - {item.responsive}</Typography>
      <Stack direction="row" justifyContent="flex-end" spacing={3}>
        <a href={item.link} rel="noreferrer" target="_blank">
          <Button variant="contained">Code</Button>
        </a>
      </Stack>
    </Box>
  );
};

export default Card;
