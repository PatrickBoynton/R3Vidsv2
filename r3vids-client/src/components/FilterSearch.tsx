import { CheckBox } from '@mui/icons-material'
import {
	Paper,
	TextField,
	FormControl,
	RadioGroup,
	FormControlLabel,
} from '@mui/material'
import { useTagsStore } from '../stores/tagsStore'

const FilterSearch = () => {
	const { tags } = useTagsStore()
	return (
		<Paper>
			<Paper>
				<TextField label="Search Videos" variant="outlined" fullWidth />
			</Paper>
			<Paper>
				<FormControl component="fieldset">
					<RadioGroup>
						{tags.map(tag => (
							<FormControlLabel
								key={tag}
								value={tag}
								label={tag}
								control={<CheckBox />}
							/>
						))}
					</RadioGroup>
				</FormControl>
			</Paper>
		</Paper>
	)
}

export default FilterSearch
