import React from 'react';
import Box from '@mui/material/Box';
import { lightBlue } from '@mui/material/colors';
import { Typography } from '@mui/material';


export default function Title(){

	return (
		<Box maxWidth={true} pt={5} mt={2} ml={10} mr={10} sx={{
			height: 150,
			borderRadius: 10,
			backgroundColor: '#c528b0',
		}}>
			<Typography color={'white'} variant="h1" align={'center'}>The Newspaper</Typography>
			
			</Box>);
}
