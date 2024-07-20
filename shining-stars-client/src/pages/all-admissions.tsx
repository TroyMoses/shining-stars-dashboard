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

import {  AdmissionCard, CustomButton } from "components";

const AllAdmissions = () => {
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
      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        <Stack direction="column" width="100%">
          <Typography fontSize={25} fontWeight={700} color="#11142d">
            {!allAdmissions.length
              ? "There are no admissions"
              : "All Admissions"}
          </Typography>
          <Box
            mb={2}
            mt={3}
            display="flex"
            width="84%"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Box
              display="flex"
              gap={2}
              flexWrap="wrap"
              mb={{ xs: "20px", sm: 0 }}
            >
              <TextField
                variant="outlined"
                color="info"
                placeholder="Search by name"
                value={currentFilterValues.name}
                onChange={(e) => {
                  setFilters([
                    {
                      field: "name",
                      operator: "contains",
                      value: e.currentTarget.value
                        ? e.currentTarget.value
                        : undefined,
                    },
                  ]);
                }}
              />
            </Box>
          </Box>
        </Stack>
      </Box>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <CustomButton
          title="Add Admission"
          handleClick={() => navigate("/admins/create")}
          backgroundColor="#475be8"
          color="#fcfcfc"
          icon={<Add />}
        />
      </Stack>

      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {allAdmissions?.map((admission) => (
          <AdmissionCard
            key={admission._id}
            id={admission._id}
            name={admission.name}
            admission_no={admission.admission_no}
            date_of_birth={admission.date_of_birth}
            age={admission.age}
            gender={admission.age}
      grade={admission.grade}
      residence={admission.residence}
      term={admission.term}
      emis_no={admission.emis_no}
      parent_name={admission.parent_name}
      parent_email={admission.parent_email}
      parent_telephone={admission.parent_telephone}
      parent_relationship_with_pupil={admission.parent_relationship_with_pupil}
      parent_address={admission.parent_address}
      parent_village={admission.parent_village}
      parent_lc={admission.parent_lc}
      parent_nin={admission.parent_nin}
      next_of_kin_name={admission.next_of_kin_name}
      next_of_kin_gender={admission.next_of_kin_gender}
      next_of_kin_telephone={admission.next_of_kin_telephone}
      next_of_kin_relationship_with_pupil={admission.next_of_kin_relationship_with_pupil}
      next_of_kin_address={admission.next_of_kin_address}
      next_of_kin_village={admission.next_of_kin_village}
      next_of_kin_lc={admission.next_of_kin_lc}
      child_medical_info={admission.child_medical_info}
          />
        ))}
      </Box>

      {allAdmissions.length > 0 && (
        <Box display="flex" gap={2} mt={3} flexWrap="wrap">
          <CustomButton
            title="Previous"
            handleClick={() => setCurrent((prev) => prev - 1)}
            backgroundColor="#475be8"
            color="#fcfcfc"
            disabled={!(current > 1)}
          />
          <Box
            display={{ xs: "hidden", sm: "flex" }}
            alignItems="center"
            gap="5px"
          >
            Page{" "}
            <strong>
              {current} of {pageCount}
            </strong>
          </Box>
          <CustomButton
            title="Next"
            handleClick={() => setCurrent((prev) => prev + 1)}
            backgroundColor="#475be8"
            color="#fcfcfc"
            disabled={current === pageCount}
          />
          <Select
            variant="outlined"
            color="info"
            displayEmpty
            required
            inputProps={{ "aria-label": "Without label" }}
            defaultValue={10}
            onChange={(e) =>
              setPageSize(e.target.value ? Number(e.target.value) : 10)
            }
          >
            {[10, 20, 30, 40, 50].map((size) => (
              <MenuItem key={size} value={size}>
                Show {size}
              </MenuItem>
            ))}
          </Select>
        </Box>
      )}
    </Box>
  );
};

export default AllAdmissions;
