import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";

import type { StudentCardProps } from "interfaces/student";

const StudentCard = ({
  id,
  name,
  stid,
  gender,
  grade,
  residence,
  paymentCode,
  photo,
}: StudentCardProps) => {
  return (
    <Card
      component={Link}
      to={`/students/show/${id}`}
      sx={{
        maxWidth: "330px",
        padding: "10px",
        "&:hover": {
          boxShadow: "0 22px 45px 2px rgba(176, 176, 176, 0.1)",
        },
        cursor: "pointer",
      }}
      elevation={0}
    >
      <CardMedia
        component="img"
        width="100%"
        height={210}
        image={photo}
        alt="card image"
        sx={{ borderRadius: "10px" }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "10px",
          paddingX: "5px",
        }}
      >
        <Stack direction="row" gap={1}>
          <Typography
            fontSize={16}
            fontWeight={500}
            color="#11142d"
            px={1.5}
            py={0.5}
            borderRadius={1}
            bgcolor="#dadefa"
            height="fit-content"
          >
            {name.toUpperCase()}
          </Typography>

          <Box
            px={1.5}
            py={0.5}
            borderRadius={1}
            bgcolor="#dadefa"
            height="fit-content"
          >
            <Typography fontSize={12} fontWeight={600} color="#475be8">
              {paymentCode}
            </Typography>
          </Box>
        </Stack>

        <Stack direction="row" gap={1}>
          <Typography
            fontSize={16}
            fontWeight={500}
            color="#11142d"
            px={1.5}
            py={0.5}
            borderRadius={1}
            bgcolor="#dadefa"
            height="fit-content"
          >
            ID: {stid.toUpperCase()}
          </Typography>

        </Stack>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <Typography fontSize={14} color="#808191">
            {grade.toUpperCase()}
          </Typography>
          <Typography fontSize={14} color="#808191">
            {residence.toUpperCase()}
          </Typography>
        </Stack>

        <Typography fontSize={14} color="#808191">
          {gender.toUpperCase()}
        </Typography>

      </CardContent>
    </Card>
  );
};

export default StudentCard;
