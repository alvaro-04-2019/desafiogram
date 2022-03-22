import Button from '@mui/material/Button'
import { ReactNode, MouseEventHandler } from 'react'

export interface AppButtonProps {
  text: string
  color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
  variant?: 'text' | 'contained' | 'outlined'
  startIcon?: ReactNode
  endIcon?: ReactNode
  fullWidth?: boolean
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const AppButton = ({
  text,
  color,
  variant,
  startIcon,
  endIcon,
  fullWidth,
  disabled,
  onClick,
}: AppButtonProps) => (
  <Button
    color={color}
    variant={variant}
    startIcon={startIcon}
    endIcon={endIcon}
    fullWidth={fullWidth}
    disabled={disabled}
    onClick={onClick}
  >
    {text}
  </Button>
)

export default AppButton