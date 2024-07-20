import Add from "@mui/icons-material/Add";
import { useTable } from "@refinedev/core";
import Box from "@mui/material/Box";
import {Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import log from "../logo.jpeg";

const Adminsion = () => {

  return (
    <Box>
      {/* Admission Form */}
      <Box display="flex" justifyContent="center" textAlign="center" mb={1}>
        <Box mr={2}>
          <img
            src={log}
            alt="Shining"
            style={{ width: "100px", height: "100px" }}
          />
        </Box>

        {/* Text content */}
        <Box justifyContent="center" textAlign="center">
          <Typography variant="h5" fontWeight={700}>
            SHINING STARS NURSERY AND PRIMARY SCHOOL - VVUMBA
          </Typography>
          <Typography
            variant="h6"
            fontWeight={700}
            style={{ fontSize: "1.1rem", textDecoration: "underline" }}
          >
            Mixed day and boarding
          </Typography>

          <Typography variant="h6" fontWeight={700}>
            TEL: 0773297951, 0753753179, 0772413164
          </Typography>

          <Typography
            variant="h6"
            style={{ fontSize: "1.1rem" }}
            fontWeight={700}
          >
            "Arise and shine"
          </Typography>
          <Typography variant="h6" fontWeight={400} mb={1}>
            <span style={{ fontWeight: 700 }}>Email:</span>{" "}
            <span style={{ textDecoration: "underline" }}>
              shiningstarsprimary2022@gmail.com
            </span>
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

      {/* Table */}
      <Box display="flex" justifyContent="center">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pupil's Name</TableCell>
              <TableCell>Admission No</TableCell>
              <TableCell>Date Of Birth</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Term</TableCell>
              <TableCell>Residence</TableCell>
              <TableCell>Emis No(LIN)</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Add rows here as needed */}
          </TableBody>
        </Table>
      </Box>

    </Box>
  );
};

export default Adminsion;
