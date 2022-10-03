import { Button, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';

export const SignInBtn = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
		setLogin('');
		setPassword('');
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		alert(
			JSON.stringify({
				login,
				password
			})
		);
		handleClose();
	};

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	return (
		<>
			<Button
				variant="contained"
				color="primary"
				size="large"
				onClick={handleOpen}
			>
				Войти
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					component="form"
					noValidate={false}
					onSubmit={handleSubmit}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						gap: '40px',
						alignItems: 'center',
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: '100%',
						maxWidth: '500px',
						bgcolor: 'background.paper',
						border: '2px solid #1976d2',
						borderRadius: '10px',
						boxShadow: 24,
						p: 4
					}}
				>
					<Typography color="primary" sx={{ mt: 2 }}>
						Войти может только администрация ресурса
					</Typography>
					<TextField
						inputProps={{
							type: 'email',
							required: true
						}}
						id="userLogin"
						label="E-mail"
						variant="outlined"
						size="large"
						fullWidth
						value={login}
						onChange={(e) => {
							setLogin(e.target.value);
						}}
					/>

					<TextField
						// {...register('password', {
						// 	required: true,
						// 	pattern:
						// 		/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/i
						// })}
						id="userPassword"
						label="Password"
						variant="outlined"
						size="large"
						fullWidth
						type="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>

					<Button
						type="submit"
						variant="contained"
						color="primary"
						size="large"
						// onClick={handleSubmit}
					>
						Войти
					</Button>
				</Box>
			</Modal>
		</>
	);
};
