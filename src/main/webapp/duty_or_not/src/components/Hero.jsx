import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';

export const Hero = () => {
	return (
		<Box
			sx={{
				bgcolor: 'background.paper',
				pt: 8,
				pb: 6
			}}
		>
			<Container maxWidth="sm">
				<Typography
					component="h1"
					variant="h2"
					align="center"
					color="text.primary"
					gutterBottom
				>
					Тут что-то
				</Typography>
				<Typography
					variant="h5"
					align="center"
					color="text.secondary"
					paragraph
				>
					и тут что-то
				</Typography>
				<Stack
					sx={{ pt: 4 }}
					direction="row"
					spacing={2}
					justifyContent="center"
				>
					<Button variant="contained">
						Поделиться своим случаем
					</Button>
				</Stack>
			</Container>
		</Box>
	);
};
