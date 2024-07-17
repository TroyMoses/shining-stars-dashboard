import Add from "@mui/icons-material/Add";
import { useTable } from "@refinedev/core";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

const Prints = () => {
  return (
    <Box>
      {/* Admission Form */}
      <Box mb={4} textAlign="center">
        <Typography variant="h4" fontWeight={700}>
          SHINING STARS NURSERY AND PRIMARY SCHOOL - VVUMBA
        </Typography>
        <Typography variant="h6" fontWeight={400}>
          Mixed day  and boarding
        </Typography>

        <Typography variant="h6" fontWeight={400}>
          TEL: 0773297951, 0753753179, 0772413164
        </Typography>

        <Typography variant="h6" fontWeight={300} mt={1} mb={2}>
          "Arise and shine"
        </Typography>
        <Typography variant="h6" fontWeight={400}>
          Email: shiningstarsprimary2022@gmail.com
        </Typography>

        <Box
          mb={2}
          sx={{
            borderBottom: "double 4px black",
          }}
        />
        <Typography variant="h6" fontWeight={700} mt={3}>
          Admission Form
        </Typography>
        <Box
          mt={2}
          mb={4}
          sx={{
            borderBottom: "1px dotted black",
            pb: 2,
          }}
        />
      </Box>

      {/* Contact Information for Parent */}
      <Box mb={4} textAlign="center">
        <Typography variant="h4" fontWeight={700}>
          Contact Information for Parent
        </Typography>
        <Typography variant="body2" mt={1} mb={2}>
          CI456
        </Typography>
        <Box
          mb={2}
          sx={{
            borderBottom: "double 4px black",
          }}
        />
        <Typography variant="h6" fontWeight={700} mt={3}>
          Contact Information for Parent
        </Typography>
        <Box
          mt={2}
          mb={4}
          sx={{
            borderBottom: "1px dotted black",
            pb: 2,
          }}
        />
      </Box>

      {/* Next of Kin */}
      <Box mb={4} textAlign="center">
        <Typography variant="h4" fontWeight={700}>
          Next of Kin
        </Typography>
        <Typography variant="body2" mt={1} mb={2}>
          NOK789
        </Typography>
        <Box
          mb={2}
          sx={{
            borderBottom: "double 4px black",
          }}
        />
        <Typography variant="h6" fontWeight={700} mt={3}>
          Next of Kin
        </Typography>
        <Box
          mt={2}
          mb={4}
          sx={{
            borderBottom: "1px dotted black",
            pb: 2,
          }}
        />
      </Box>

      {/* Medical Information */}
      <Box mb={4} textAlign="center">
        <Typography variant="h4" fontWeight={700}>
          Medical Information
        </Typography>
        <Typography variant="body2" mt={1} mb={2}>
          MI101
        </Typography>
        <Box
          mb={2}
          sx={{
            borderBottom: "double 4px black",
          }}
        />
        <Typography variant="h6" fontWeight={700} mt={3}>
          Medical Information
        </Typography>
        <Box
          mt={2}
          mb={4}
          sx={{
            borderBottom: "1px dotted black",
            pb: 2,
          }}
        />
      </Box>

    </Box>
  );
};

export default Prints;
