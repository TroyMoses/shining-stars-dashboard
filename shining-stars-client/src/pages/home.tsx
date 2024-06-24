import { useList } from "@refinedev/core";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import {
  PieChart,
  StudentReferrals,
  TotalFees,
  StudentCard,
} from "components";

const Home = () => {
  const { data, isLoading, isError } = useList({
    resource: "students",
    config: {
      pagination: {
        pageSize: 4,
      },
    },
  });

  const adminsData = useList({
    resource: "admins",
    config: {
      pagination: {
        pageSize: 4,
      },
    },
  });

  const staffsData = useList({
    resource: "staffs",
    config: {
      pagination: {
        pageSize: 4,
      },
    },
  });

  const prefectsData = useList({
    resource: "prefects",
    config: {
      pagination: {
        pageSize: 4,
      },
    },
  });

  const latestStudents = data?.data ?? [];

  const noOfStudents = latestStudents.length;
  const noOfAdmins = adminsData?.data?.data?.length;
  const noOfStaffs = staffsData?.data?.data?.length;
  const noOfPrefects = prefectsData?.data?.data?.length;


  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Something went wrong!</Typography>;

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Total Administrators"
          value={noOfAdmins!}
          series={[60, 40]}
          colors={["#275be8", "#c4e8ef"]}
        />
        <PieChart
          title="Total Staffs"
          value={noOfStaffs!}
          series={[75, 25]}
          colors={["#275be8", "#c4e8ef"]}
        />
        <PieChart
          title="Total Students"
          value={noOfStudents!}
          series={[75, 25]}
          colors={["#275be8", "#c4e8ef"]}
        />
        <PieChart
          title="Total Prefects"
          value={noOfPrefects!}
          series={[75, 25]}
          colors={["#275be8", "#c4e8ef"]}
        />
      </Box>

      <Stack
        mt="25px"
        width="100%"
      >
        <StudentReferrals />
      </Stack>

      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        bgcolor="#fcfcfc"
        display="flex"
        flexDirection="column"
        minWidth="100%"
        mt="25px"
      >
        <Typography fontSize="18px" fontWeight={600} color="#11142d">
          Latest Students
        </Typography>

        <Box mt={2.5} sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {latestStudents.map((student) => (
            <StudentCard
              key={student._id}
              id={student._id}
              name={student.name}
              grade={student.grade}
              paymentCode={student.paymentCode}
              photo={student.photo}
              gender={student.gender}
              residence={student.residence}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
