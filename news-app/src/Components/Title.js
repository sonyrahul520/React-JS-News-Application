import React from 'react';
import Box from '@mui/material/Box';
import { lightBlue } from '@mui/material/colors';
import { Typography } from '@mui/material';


export default function Title(){

	return (
		<Box maxWidth={true} ml={10} mr={10} sx={{
			height: 150,
			backgroundColor: '#fbe4ff',
		}}>
			<Typography variant="h1" align={'center'}>The Newspaper</Typography>
			
			</Box>);
}
