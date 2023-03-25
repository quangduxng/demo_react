import React from 'react';
import BasicStatistics from './BasicStatistics'
import BarChart from './Chart'
import ChartAppointment from './ChartAppointment'
import Right from './RightTest'
import { Box } from '@chakra-ui/react'

export default function Dashboard(){
    return(
    <>
        <Right/>
        <Box
        
        ml={'280px'}
        >
            <BasicStatistics/>
            <Box>
                <BarChart/>
                <ChartAppointment/>
            </Box>
        </Box>
    </>
    )
}