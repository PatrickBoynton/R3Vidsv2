import { createTheme } from '@mui/material'

const theme = createTheme({
	palette: {
		text: {
			primary: '#ffdb60',
			secondary: '#2200ac',
		},
		primary: {
			main: '#2200ac',
			contrastText: '#ffdb60',
			light: '#ffdb60',
		},
		error: {
			main: '#ff5252',
		},
		background: {
			default: '#2200ac',
		},
	},
})

export default theme
