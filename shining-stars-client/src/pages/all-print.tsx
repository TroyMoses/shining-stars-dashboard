import Add from "@mui/icons-material/Add";
import { useTable } from "@refinedev/core";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import log from "../logo.jpeg"

const Prints = () => {
  const handlePrint = () => {
    window.print();
  };
  
  return (
    <Box>
      {/* Admission Form */}
      <Box display="flex" justifyContent="center" textAlign="center" mb={1}>
        <Box mr={2}>
          <img src={log} alt="Shining" style={{ width: "100px", height: "100px" }} />
        </Box>

      {/* Text content */}
      <Box justifyContent="center" textAlign="center">
        <Typography variant="h5" fontWeight={700}>
          SHINING STARS NURSERY AND PRIMARY SCHOOL - VVUMBA
        </Typography>
        <Typography variant="h6" fontWeight={700} style={{ fontSize: '1.1rem', textDecoration: 'underline' }}>
          Mixed day and boarding
        </Typography>

        <Typography variant="h6" fontWeight={700}>
          TEL: 0773297951, 0753753179, 0772413164
        </Typography>

        <Typography variant="h6" style={{ fontSize: '1.1rem' }} fontWeight={700}>
          "Arise and shine"
        </Typography>
        <Typography variant="h6" fontWeight={400} mb={1}>
          <span style={{ fontWeight: 700 }}>Email:</span> <span style={{ textDecoration: 'underline' }}>shiningstarsprimary2022@gmail.com</span>
        </Typography>

      </Box>
    </Box>
    <Box justifyContent="center" textAlign="center">
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
          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
            Pupil's Name: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "500px" }} />
          </Typography>

          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
            Admission No: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "300px" }} />
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
            Date of Birth: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
          </Typography>

          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
            Age: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
          </Typography>

          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
            Gender: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
          </Typography>
        </Box>

        {/* for the class row */}
        <Box display="flex" justifyContent="space-between" mt={2}>
        <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
          Class: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
        </Typography>

        <Box display="flex" alignItems="center">
          <Typography variant="h6" fontWeight={300} mr={1} style={{ fontSize: '1.1rem' }}>
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
          <Typography variant="h6" fontWeight={300} mr={1} style={{ fontSize: '1.1rem' }}>
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

        <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
          Term: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
        </Typography>
      </Box>
      
            {/* for the Emis No */}
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
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
          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
            Parent's/Guardian's Name: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "800px" }} />
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
            Telephone Number: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "400px" }} />
          </Typography>

          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
            Relationship with the Pupil: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
            Address: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
          </Typography>

          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
            Village: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
          </Typography>

          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
            LC1: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
            NIN No: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "900px" }} />
          </Typography>
        </Box>
      </Box>

      {/* Next of Kin */}
      <Box mb={1} textAlign="center">
        <Typography variant="h6" fontWeight={700}>
          NEXT OF KIN
        </Typography>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
            Name: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "600px" }} />
          </Typography>

          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
            Gender: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
            Telephone Number: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "300px" }} />
          </Typography>

          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
            Relationship with the pupil: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
            Address: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
          </Typography>

          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
            Village: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
          </Typography>

          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
            LC1: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
          </Typography>
        </Box>
      </Box>

      {/* Medical Information */}
      <Box mb={4} >
        <Typography variant="h6" fontWeight={700} textAlign="center">
          MEDICAL INFORMATION
        </Typography>
        <Typography variant="body1" mt={1} mb={2} style={{ fontSize: '1.1rem' }}>
          Does your child have any medical issue(s) of which we need to be aware of?
        </Typography>
        <Typography variant="body1" fontWeight={300}>
            If YES please explain: <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "900px" }} />
        </Typography>
        <Typography variant="body1" fontWeight={300} style={{ fontSize: '1.1rem' }}>
            <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "1000px" }} />
        </Typography>

        <Typography variant="body1" fontWeight={300} style={{ fontSize: '1.1rem' }}>
            I <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "300px" }} /> hereby certify to the best of my knowledge that the above information is true and accurate.
        </Typography>
      </Box>

      {/* signtures */}

      <Box display="flex" justifyContent="space-between" mt={2}>
        <Typography variant="h6" fontWeight={300}>
         <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "300px" }} />
        </Typography>

        <Typography variant="h6" fontWeight={300}>
          <span style={{ borderBottom: "1px dotted black", display: "inline-block", width: "200px" }} />
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Typography variant="h6" fontWeight={800} style={{ fontSize: '1.2rem' }}>
          PARENT'S/GUARDIAN'S SIGNATURE 
        </Typography>

        <Typography variant="h6" fontWeight={800} style={{ fontSize: '1.2rem' }}>
          DATE 
        </Typography>
      </Box>

      <Typography variant="h6" fontWeight={700} textAlign="center" mt={4}>
      LOCATED ALONG GAYAZA-ZIROBWE ROAD BUSIKA TOWN COUNCIL
      </Typography>

      <Typography variant="h6" fontWeight={400} textAlign="center" mt={2}>
      "A CENTRE FOR GUARANTEED EXCELLENCE"
      </Typography>

      {/* Print Button */}
      <Box mt={4} textAlign="center">
        <Button variant="contained" color="primary" onClick={handlePrint}>
          Print Form
        </Button>
      </Box>

    </Box>
  );
};

export default Prints;
