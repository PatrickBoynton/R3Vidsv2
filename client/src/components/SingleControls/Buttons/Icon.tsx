import { IconButton } from '@mui/material'

interface Props {
  onClick?: any
  type?: any
  icon: any
}
const Icon = ({ onClick, icon: children, type}: Props) => {
    return <IconButton onClick={onClick} type={type}>
      {children}
    </IconButton>
}

export default Icon