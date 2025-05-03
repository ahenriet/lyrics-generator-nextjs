'use client'

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		primary: {
			main: '#557755',
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundImage: "linear-gradient(to bottom, #557755, #334433)",
				},
			},
		},
	},
});

export default theme;