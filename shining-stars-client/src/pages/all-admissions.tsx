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
import Stack from "@mui/material/Stack";
import Print from '@mui/icons-material/Print';
import Delete from '@mui/icons-material/Delete';
import { CustomButton } from "components";

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
              <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '15px', color: 'white' }}>Pupil's Name</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '15px', color: 'white' }}>Admission No</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '15px', color: 'white' }}>Date Of Birth</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '15px', color: 'white' }}>Age</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '15px', color: 'white' }}>Gender</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '15px', color: 'white' }}>Class</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '15px', color: 'white' }}>Term</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '15px', color: 'white' }}>Residence</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '15px', color: 'white' }}>Emis No(LIN)</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '15px', color: 'white' }}>Action</TableCell>
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
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#90caf9'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#e3f2fd' : '#bbdefb'}
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
                <Stack direction="row" spacing={1} justifyContent="center">
                  
                  <CustomButton
                    title="PRINT"
                    handleClick={() => navigate(`/print?id=${admission._id}`)}
                    backgroundColor="#4caf50"
                    color="#fcfcfc"
                    icon={<Print />}
                  />
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: '#f44336', color: 'white' }}
                    startIcon={<Delete />}
                    onClick={() => navigate(`/admissions?id=${admission._id}`)}
                  >
                    DELETE
                  </Button>
                </Stack>
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
