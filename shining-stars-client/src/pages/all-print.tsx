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
      <Box mb={1} textAlign="center">
        <Typography variant="h5" fontWeight={700}>
          SHINING STARS NURSERY AND PRIMARY SCHOOL - VVUMBA
        </Typography>
        <Typography variant="h6" fontWeight={400}>
          Mixed day  and boarding
        </Typography>

        <Typography variant="h6" fontWeight={400}>
          TEL: 0773297951, 0753753179, 0772413164
        </Typography>

        <Typography variant="h6" fontWeight={300} >
          "Arise and shine"
        </Typography>
        <Typography variant="h6" fontWeight={400} mb={2}>
          Email: shiningstarsprimary2022@gmail.com
        </Typography>

        <Box
          mb={2}
          sx={{
            borderBottom: "double 4px black",
          }}
        />
      </Box>
      
      {/* Contact Information for Parent */}
      <Box mb={1} >
        <Typography variant="h6" fontWeight={700} textAlign="center" >
          ADMISSION FORM
        </Typography>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" fontWeight={300}>
            Pupil's Name: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "500px" }} />
          </Typography>

          <Typography variant="h6" fontWeight={300}>
            Admission No: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "300px" }} />
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" fontWeight={300}>
            Date of Birth: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
          </Typography>

          <Typography variant="h6" fontWeight={300}>
            Age: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
          </Typography>

          <Typography variant="h6" fontWeight={300}>
            Gender: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
          </Typography>
        </Box>

        {/* for the class row */}
        <Box display="flex" justifyContent="space-between" mt={2}>
        <Typography variant="h6" fontWeight={300}>
          Class: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
        </Typography>

        <Box display="flex" alignItems="center">
          <Typography variant="h6" fontWeight={300} mr={1}>
            Day
          </Typography>
          <Box
            sx={{
              width: 45,
              height: 25,
              border: "1px solid black",
              display: "inline-block",
            }}
          />
        </Box>

        <Box display="flex" alignItems="center">
          <Typography variant="h6" fontWeight={300} mr={1}>
            Boarding
          </Typography>
          <Box
            sx={{
              width: 45,
              height: 25,
              border: "1px solid black",
              display: "inline-block",
            }}
          />
        </Box>

        <Typography variant="h6" fontWeight={300}>
          Term: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
        </Typography>
      </Box>
      
            {/* for the Emis No */}
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" fontWeight={300}>
            Emis No. (LIN): <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "900px" }} />
          </Typography>
        </Box>
      </Box>



      {/* Contact Information */}
      <Box mb={1} textAlign="center">
        <Typography variant="h5" fontWeight={700}>
          CONTACT INFORMATION
        </Typography>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" fontWeight={300}>
            Parent's/Guardian's Name: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "800px" }} />
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" fontWeight={300}>
            Telephone Number: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "400px" }} />
          </Typography>

          <Typography variant="h6" fontWeight={300}>
            Relationship with the Pupil: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" fontWeight={300}>
            Address: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
          </Typography>

          <Typography variant="h6" fontWeight={300}>
            Village: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
          </Typography>

          <Typography variant="h6" fontWeight={300}>
            LC1: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" fontWeight={300}>
            NIN No: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "900px" }} />
          </Typography>
        </Box>
      </Box>

      {/* Next of Kin */}
      <Box mb={4} textAlign="center">
        <Typography variant="h6" fontWeight={700}>
          NEXT OF KIN
        </Typography>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" fontWeight={300}>
            Name: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "600px" }} />
          </Typography>

          <Typography variant="h6" fontWeight={300}>
            Gender: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" fontWeight={300}>
            Telephone Number: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "300px" }} />
          </Typography>

          <Typography variant="h6" fontWeight={300}>
            Relationship with the pupil: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
          </Typography>
        </Box>

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
