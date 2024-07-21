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

interface Admission {
  name: string;
  admission_no: string;
  date_of_birth: string;
  age: number;
  gender: string;
  grade: string;
  residence: string;
  term: string;
  emis_no: string;
}

const Admissions = () => {

  const navigate = useNavigate();

  const {
    tableQueryResult: { data, isLoading, isError },
    current,
    setCurrent,
    setPageSize,
    pageCount,
    sorter,
    setSorter,
    filters,
    setFilters,
  } = useTable();

  const allAdmissions = data?.data ?? [];

  const currentFilterValues = useMemo(() => {
    const logicalFilters = filters.flatMap((item) =>
      "field" in item ? item : [],
    );

    return {
      name: logicalFilters.find((item) => item.field === "name")?.value || "",
    };
  }, [filters]);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error...</Typography>;

  return (
    <Box display="flex" justifyContent="center" mb={1}>
      {allAdmissions?.map((admission) => (
        <Typography 
        key={admission._id}
        fontSize={20}
        fontWeight={500}
        color="#808191"
        height="fit-content"
      >
        Name:{admission.name}
        Admission No: {admission.admission_no}
        Date Of Birth{admission.date_of_birth}
        Age: {admission.age}
        Gender: {admission.gender}
        Class: {admission.grade}
        Residence: {admission.residence}
        Term: {admission.term}
        Emis No: {admission.emis_no}
      </Typography>
      ))}
    </Box>
    // <Box>
    //   {/* Admission Form */}
    //   <Box display="flex" justifyContent="center" textAlign="center" mb={1}>
    //     <Box mr={2}>
    //       <img
    //         src={log}
    //         alt="Shining"
    //         style={{ width: "100px", height: "100px" }}
    //       />
    //     </Box>

    //     {/* Text content */}
    //     <Box justifyContent="center" textAlign="center">
    //       <Typography variant="h5" fontWeight={700}>
    //         SHINING STARS NURSERY AND PRIMARY SCHOOL - VVUMBA
    //       </Typography>
    //       <Typography
    //         variant="h6"
    //         fontWeight={700}
    //         style={{ fontSize: "1.1rem", textDecoration: "underline" }}
    //       >
    //         Mixed day and boarding
    //       </Typography>

    //       <Typography variant="h6" fontWeight={700}>
    //         TEL: 0773297951, 0753753179, 0772413164
    //       </Typography>

    //       <Typography
    //         variant="h6"
    //         style={{ fontSize: "1.1rem" }}
    //         fontWeight={700}
    //       >
    //         "Arise and shine"
    //       </Typography>
    //       <Typography variant="h6" fontWeight={400} mb={1}>
    //         <span style={{ fontWeight: 700 }}>Email:</span>{" "}
    //         <span style={{ textDecoration: "underline" }}>
    //           shiningstarsprimary2022@gmail.com
    //         </span>
    //       </Typography>
    //     </Box>
    //   </Box>
    //   <Box justifyContent="center" textAlign="center">
    //     <Box
    //       mb={2}
    //       sx={{
    //         borderBottom: "double 4px black",
    //       }}
    //     />
    //   </Box>

    //   {/* Table */}
    //   <Box display="flex" justifyContent="center">
    //     <Table>
    //       <TableHead>
    //         <TableRow>
    //           <TableCell>Pupil's Name</TableCell>
    //           <TableCell>Admission No</TableCell>
    //           <TableCell>Date Of Birth</TableCell>
    //           <TableCell>Age</TableCell>
    //           <TableCell>Gender</TableCell>
    //           <TableCell>Class</TableCell>
    //           <TableCell>Term</TableCell>
    //           <TableCell>Residence</TableCell>
    //           <TableCell>Emis No(LIN)</TableCell>
    //           <TableCell>Action</TableCell>
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {/* Add rows here as needed */}
    //       </TableBody>
    //     </Table>
    //   </Box>

    // </Box>
  );
};

export default Admissions;
