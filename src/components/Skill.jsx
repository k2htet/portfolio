import { Stack, Box, Typography, LinearProgress } from "@mui/material";

const skill = ({ title, value }) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={3}
        width="50%"
      >
        <Box
          sx={{ width: "25px", height: "25px", backgroundColor: "danger.main" }}
        ></Box>
        <Typography variant="h5">{title}</Typography>
      </Stack>
      <Stack
        sx={{ width: "50%" }}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={3}
      >
        <Box sx={{ width: "100%" }}>
          <LinearProgress
            variant="determinate"
            value={value}
            sx={{ backgroundColor: "#fff" }}
            color="danger"
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="p" color="white">
            {value}%
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default skill;
