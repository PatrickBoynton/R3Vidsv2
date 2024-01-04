import { Box, FormControl, FormControlLabel } from '@mui/material'
import { CheckBox } from '@mui/icons-material'

type Props = {
	tags: string[]
}
export const Filter = ({ tags }: Props) => {
	return (
		<FormControl component="fieldset">
			<Box display="flex" flexDirection="column">
				{tags.map(tag => (
					<FormControlLabel
						key={tag}
						value={tag}
						label={tag}
						control={<CheckBox />}
					/>
				))}
			</Box>
		</FormControl>
	)
}
