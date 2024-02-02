import ControlIcon from '../../ControlIcon.tsx'
import { SkipNext, SkipPrevious } from '@mui/icons-material'
import { navigateToNextVideo } from './navigateMethods.ts'

type Props = {
	forward?: boolean
	currentIndex: number
}

const Navigate = ({ forward = false, currentIndex }: Props) => {
	return (
		<ControlIcon
			onClick={() =>
				forward
					? navigateToNextVideo(currentIndex, forward)
					: navigateToNextVideo(currentIndex)
			}
			icon={
				forward ? (
					<SkipNext color="secondary" sx={{ fontSize: '48px' }} />
				) : (
					<SkipPrevious color="secondary" sx={{ fontSize: '48px' }} />
				)
			}
		/>
	)
}

export default Navigate
