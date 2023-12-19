import { IconButton } from '@mui/material'

type Props = {
	onClick: () => any
	type?: any
	icon: any
}

const ControlIcon = ({ onClick, icon: children, type = '' }: Props) => {
	return (
		<IconButton onClick={onClick} type={type} color="secondary">
			{children}
		</IconButton>
	)
}

export default ControlIcon
