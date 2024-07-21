import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useList } from '@refinedev/core';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Print from '@mui/icons-material/Print';
import log from '../logo.jpeg';
import CheckIcon from '@mui/icons-material/Check';

const Prints = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const { data, isLoading, isError } = useList({
    resource: 'admissions',
    config: {
      pagination: {
        pageSize: 6,
      },
    },
  });

  const admissions = data?.data ?? [];

  const admission = admissions.find((admission) => admission._id === id);

  const handlePrint = () => {
    window.print();
  };

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error loading data...</Typography>;

  if (!admission) return <Typography>No admission found with this ID.</Typography>;

  return (
    <Box>
      <Box display="flex" justifyContent="center" textAlign="center" mb={1}>
        <Box mr={2}>
          <img src={log} alt="Shining" style={{ width: '100px', height: '100px' }} />
        </Box>
        <Box justifyContent="center" textAlign="center">
        <Typography
          variant="h6"
          sx={{ fontWeight: 900, color: 'black', textAlign: 'center' }} // Inline styles for boldness and color
        >
            SHINING STARS NURSERY AND PRIMARY SCHOOL - VVUMBA
          </Typography>
          <Typography
          variant="h6"
          sx={{ fontWeight: 900, color: 'black', textAlign: 'center' , textDecoration: 'underline' , fontSize: '1rem' }} // Inline styles for boldness and color
        >
            Mixed day and boarding
          </Typography>
          <Typography
          variant="h6"
          sx={{ fontWeight: 900, color: 'black', textAlign: 'center'  , fontSize: '1rem'}} // Inline styles for boldness and color
        >
            TEL: 0773297951, 0753753179, 0772413164
          </Typography>
          <Typography
          variant="h6"
          sx={{ fontWeight: 900, color: 'black', textAlign: 'center'  , fontSize: '1rem'}} // Inline styles for boldness and color
        >
            "Arise and shine"
          </Typography>
          <Typography variant="h6" fontWeight={400} mb={1}>
            <span style={{ fontWeight: 900, color: 'black'  , fontSize: '1rem'}}>Email:</span>{' '}
            <span style={{ textDecoration: 'underline' }}>shiningstarsprimary2022@gmail.com</span>
          </Typography>
        </Box>
      </Box>
      <Box justifyContent="center" textAlign="center">
        <Box mb={2} sx={{ borderBottom: 'double 4px black' }} />
      </Box>

      <Box mb={1}>
      <Typography
          variant="h6"
          sx={{ fontWeight: 900, color: 'black', textAlign: 'center' , fontSize: '1rem'}} // Inline styles for boldness and color
        >
          ADMISSION FORM
        </Typography>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
          <span style={{ fontWeight: 900 }}>Pupil's Name: </span> {admission.name}
          </Typography>
          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
                    <span style={{ fontWeight: 900 }}>  Admission No:</span> {admission.admission_no}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
                    <span style={{ fontWeight: 900 }}>  Date of Birth:</span> {admission.date_of_birth}
          </Typography>
          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
                    <span style={{ fontWeight: 900 }}>  Age:</span> {admission.age}
          </Typography>
          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
                    <span style={{ fontWeight: 900 }}>  Gender:</span>{admission.gender}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
                    <span style={{ fontWeight: 900 }}>  Class:</span>{admission.grade}
          </Typography>

          <Box display="flex" alignItems="center">
        <Typography variant="h6" fontWeight={300} mr={1} style={{ fontSize: '1.1rem' }}>
                  <span style={{ fontWeight: 900 }}>  Day</span>
        </Typography>
        <Box
          sx={{
            width: 45,
            height: 25,
            border: '1px solid black',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {admission.residence === 'day' && (
            <CheckIcon sx={{ color: 'red', fontSize: '3rem', position: 'absolute' }} />
          )}
        </Box>
      </Box>
      <Box display="flex" alignItems="center" >
        <Typography variant="h6" fontWeight={300} mr={1} style={{ fontSize: '1.1rem' }}>
                  <span style={{ fontWeight: 900 }}>  Boarding</span>
        </Typography>
        <Box
          sx={{
            width: 45,
            height: 25,
            border: '1px solid black',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {admission.residence === 'boarding' && (
            <CheckIcon sx={{ color: 'red', fontSize: '3rem', position: 'absolute' }} />
          )}
        </Box>
      </Box>

          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
                    <span style={{ fontWeight: 900 }}>  Term:</span> {admission.term}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" fontWeight={300} style={{ fontSize: '1.1rem' }}>
                    <span style={{ fontWeight: 900 }}>  Emis No. (LIN):</span> {admission.emis_no}
          </Typography>
        </Box>
      </Box>

      {/* Contact Information */}
      <Box mb={1} textAlign="center">
      <Typography
          variant="h6"
          sx={{ fontWeight: 900, color: 'black', textAlign: 'center'  , fontSize: '1rem' }} // Inline styles for boldness and color
        >
          CONTACT INFORMATION
        </Typography>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography
            variant="h6"
            fontWeight={300}
            style={{ fontSize: "1.1rem" }}
          >
                    <span style={{ fontWeight: 900 }}>  Parent's/Guardian's Name:</span> {admission.parent_name}
            
          </Typography>

          <Typography
            variant="h6"
            fontWeight={300}
            style={{ fontSize: "1.1rem" }}
          >
                    <span style={{ fontWeight: 900 }}>  Email:</span> {admission.parent_email}
            
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography
            variant="h6"
            fontWeight={300}
            style={{ fontSize: "1.1rem" }}
          >
                    <span style={{ fontWeight: 900 }}>  Telephone Number:</span> {admission.parent_telephone}
            
          </Typography>

          <Typography
            variant="h6"
            fontWeight={300}
            style={{ fontSize: "1.1rem" }}
          >
                    <span style={{ fontWeight: 900 }}>  Relationship with the Pupil:</span> {admission.parent_relationship_with_pupil}
           
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography
            variant="h6"
            fontWeight={300}
            style={{ fontSize: "1.1rem" }}
          >
                    <span style={{ fontWeight: 900 }}>  Address:</span> {admission.parent_address}
            
          </Typography>

          <Typography
            variant="h6"
            fontWeight={300}
            style={{ fontSize: "1.1rem" }}
          >
                    <span style={{ fontWeight: 900 }}>  Village:</span> {admission.parent_village}

          </Typography>

          <Typography
            variant="h6"
            fontWeight={300}
            style={{ fontSize: "1.1rem" }}
          >
                    <span style={{ fontWeight: 900 }}>  LC1:</span> {admission.parent_lc}
            
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography
            variant="h6"
            fontWeight={300}
            style={{ fontSize: "1.1rem" }}
          >
                    <span style={{ fontWeight: 900 }}>  NIN No:</span> {admission.parent_nin}
            
          </Typography>
        </Box>
      </Box>

      {/* Next of Kin */}
      <Box mb={1} textAlign="center">
      <Typography
          variant="h6"
          sx={{ fontWeight: 900, color: 'black', textAlign: 'center'  , fontSize: '1rem' }} // Inline styles for boldness and color
        >
          NEXT OF KIN
        </Typography>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography
            variant="h6"
            fontWeight={300}
            style={{ fontSize: "1.1rem" }}
          >
                    <span style={{ fontWeight: 900 }}>  Name:</span> {admission.next_of_kin_name}
            
          </Typography>

          <Typography
            variant="h6"
            fontWeight={300}
            style={{ fontSize: "1.1rem" }}
          >
                    <span style={{ fontWeight: 900 }}>  Gender:</span> {admission.next_of_kin_gender}
            
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography
            variant="h6"
            fontWeight={300}
            style={{ fontSize: "1.1rem" }}
          >
                    <span style={{ fontWeight: 900 }}>  Telephone Number:</span> {admission.next_of_kin_telephone}
            
          </Typography>

          <Typography
            variant="h6"
            fontWeight={300}
            style={{ fontSize: "1.1rem" }}
          >
                    <span style={{ fontWeight: 900 }}>  Relationship with the pupil:</span> {admission.next_of_kin_relationship_with_pupil}
            
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography
            variant="h6"
            fontWeight={300}
            style={{ fontSize: "1.1rem" }}
          >
                    <span style={{ fontWeight: 900 }}>  Address:</span> {admission.next_of_kin_address}
            
          </Typography>

          <Typography
            variant="h6"
            fontWeight={300}
            style={{ fontSize: "1.1rem" }}
          >
                    <span style={{ fontWeight: 900 }}>  Village:</span> {admission.next_of_kin_village}
            
          </Typography>

          <Typography
            variant="h6"
            fontWeight={300}
            style={{ fontSize: "1.1rem" }}
          >
                    <span style={{ fontWeight: 900 }}>  LC1:</span> {admission.next_of_kin_lc}
            
          </Typography>
        </Box>
      </Box>

      {/* Medical Information */}
      <Box mb={4}>
      <Typography
          variant="h6"
          sx={{ fontWeight: 900, color: 'black', textAlign: 'center'  , fontSize: '1rem' }} // Inline styles for boldness and color
        >
          MEDICAL INFORMATION
        </Typography>
        <Typography
          variant="body1"
          mt={1}
          mb={2}
          style={{ fontSize: "1.1rem" }}
        >
                   <span style={{ fontWeight: 900 }}> Does your child have any medical issue(s) of which we need to be aware
          of? </span>
        </Typography>
        <Typography variant="body1" fontWeight={300}>
        <span style={{ fontWeight: 900 }}>  If YES please explain: </span> {admission.child_medical_info}
          
        </Typography>
        <Typography
          variant="body1"
          fontWeight={300}
          style={{ fontSize: "1.1rem" }}
        >
          {/* <span
            style={{
              borderBottom: "1px dotted black",
              display: "inline-block",
              width: "1000px",
            }}
          /> */}
        </Typography>

        <Typography
          variant="body1"
          fontWeight={300}
          style={{ fontSize: "1.1rem" }}
        >
                   <span style={{ fontWeight: 900 }}> I </span> {admission.parent_name}           <span style={{ fontWeight: 900 }}> hereby certify to the best of my knowledge that the above information
          is true and accurate. </span>
        </Typography>
      </Box>

      {/* signtures */}

      <Box display="flex" justifyContent="space-between" mt={2}>
            <Typography
        variant="h6"
        fontWeight={300}
        style={{ fontFamily: 'Cursive', fontStyle: 'italic' }}
      >
        {admission.parent_name.toLowerCase()}
      </Typography>

        <Typography variant="h6" fontWeight={300}>
          <span
            style={{
              borderBottom: "1px dotted black",
              display: "inline-block",
              width: "200px",
            }}
          />
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={2}>
      <Typography
          variant="h6"
          sx={{ fontWeight: 500, color: 'black'  , fontSize: '1rem'}} // Inline styles for boldness and color
        >
          PARENT'S/GUARDIAN'S SIGNATURE
        </Typography>

        <Typography
          variant="h6"
          sx={{ fontWeight: 500, color: 'black'  , fontSize: '1rem'}} // Inline styles for boldness and color
        >
          DATE
        </Typography>
      </Box>

      <Typography
          variant="h6" mt={3}
          sx={{ fontWeight: 700, color: 'black', textAlign: 'center'  , fontSize: '1rem'}} // Inline styles for boldness and color
        >
        LOCATED ALONG GAYAZA-ZIROBWE ROAD BUSIKA TOWN COUNCIL
      </Typography>

      <Typography variant="h6" fontWeight={400}  fontSize= "1rem" textAlign="center" mt={2}>
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
