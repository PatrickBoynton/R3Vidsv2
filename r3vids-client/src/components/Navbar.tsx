import { UploadFile } from '@mui/icons-material'
import { AppBar, Box, Button, TextField } from '@mui/material'

const Navbar = () => {
	const handleSearch = () => {}
	const handleUpload = () => {}
	return (
		<Box sx={{ marginTop: '60px' }}>
			<AppBar>
				<Box display="flex">
					<TextField />
					<Button color="secondary" variant="contained">
						Search
					</Button>
					<UploadFile color="secondary" fontSize="large" />
					<Button color="secondary" variant="contained">
						Upload
					</Button>
				</Box>
			</AppBar>
		</Box>
	)
}

export default Navbar
