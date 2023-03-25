import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import {
  Flex,
  Box,
  Text,
  
} from '@chakra-ui/react';
const rt=()=>{
  const day= document.getElementById('day').textContent;
  return <div>{day}</div>;
}
 const Datepicker =() => {
    const [startDate, setStartDate] = useState(new Date());
  
     console.log(startDate);
    
    const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
 
  
  var dateP= new Date('2022-02-22T03:18:35.000Z')
    return (
    <>
         
    
    <Box>
    
      <DatePicker
     
      selected={startDate}
      onChange={onChange}
       excludeDates={[addDays(new Date(), 2), addDays(dateP,0)]}
      selectsRange
      selectsDisabledDaysInRange
      inline
      
      />
      </Box>
     <Box>
     <Text id='day' value={startDate.getDate().toString()}>
         Date: {startDate.getDate().toString()}
        </Text>
        <Text id='day' value={startDate.getDate().toString()}>
         Month: {startDate.getMonth().toString()}
        </Text>
     </Box>
   </>

    );
  };


export {rt,Datepicker}