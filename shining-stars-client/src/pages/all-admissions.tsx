import Add from "@mui/icons-material/Add";
import { useTable } from "@refinedev/core";
import Box from "@mui/material/Box";
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, TablePagination, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import log from "../logo.jpeg";

interface Admission {
  _id: string;
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
    <Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <TablePagination
          component="div"
          count={pageCount * 10}
          page={current - 1}
          onPageChange={(event, newPage) => setCurrent(newPage + 1)}
          rowsPerPage={10}
          onRowsPerPageChange={(event) => setPageSize(parseInt(event.target.value, 10))}
        />
        <TextField
          label="Search by Name"
          variant="outlined"
          value={currentFilterValues.name}
          onChange={(e) => {
            setFilters([
              {
                field: "name",
                operator: "contains",
                value: e.target.value,
              },
            ]);
          }}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#3f51b5' }}>
              <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '16px', color: 'white' }}>Pupil's Name</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '16px', color: 'white' }}>Admission No</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '16px', color: 'white' }}>Date Of Birth</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '16px', color: 'white' }}>Age</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '16px', color: 'white' }}>Gender</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '16px', color: 'white' }}>Class</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '16px', color: 'white' }}>Term</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '16px', color: 'white' }}>Residence</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '16px', color: 'white' }}>Emis No(LIN)</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '16px', color: 'white' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allAdmissions.map((admission, index) => (
              <TableRow
                key={admission._id}
                hover
                style={{
                  backgroundColor: index % 2 === 0 ? '#e3f2fd' : '#bbdefb',
                  cursor: 'pointer',
                }}
              >
                <TableCell align="center">{admission.name}</TableCell>
                <TableCell align="center">{admission.admission_no}</TableCell>
                <TableCell align="center">{admission.date_of_birth}</TableCell>
                <TableCell align="center">{admission.age}</TableCell>
                <TableCell align="center">{admission.gender}</TableCell>
                <TableCell align="center">{admission.grade}</TableCell>
                <TableCell align="center">{admission.term}</TableCell>
                <TableCell align="center">{admission.residence}</TableCell>
                <TableCell align="center">{admission.emis_no}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Add />}
                    onClick={() => navigate(`/admissions/${admission._id}`)}
                  >
                    PRINT
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Admissions;
