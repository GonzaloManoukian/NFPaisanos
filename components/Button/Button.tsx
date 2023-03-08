import { ButtonHTMLAttributes, memo, MouseEventHandler } from 'react'
import Spinning from './Spinning'
import style from './Button.module.css'
import { titleFont } from '@/utils/fonts'
import { Icon } from '../Icon/Icon'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: JSX.Element | string;
    icon?: string;
    primary?: boolean;
    standard?: boolean;
    outline?: boolean;
    plain?: boolean;
    size?: 'small' | 'medium' | 'large' | 'smallRounded';
    fullWidth?: boolean;
    roundedFull?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    tooltip?: string;
    disabled?: boolean;
    isLoading?: boolean;
}

const Button = ({
  size = 'medium',
  primary,
  standard,
  children = '',
  onClick,
  icon,
  fullWidth = false,
  outline = false,
  plain,
  tooltip,
  roundedFull,
  disabled,
  isLoading = false,
  /** Takes the rest of the native properties of an Button HTML (name, style, onmousedown, ondblclick, ...etc ) */
  ...buttonProps
}: ButtonProps) => (
  <button
    disabled={disabled || isLoading}
    onClick={onClick}
    className={`
      ${titleFont.className}
      ${style.button}
        ${style[size]}
        ${primary && style.primary}
        ${standard && style.standard}
        ${outline && style.outline}
        ${plain && style.plain}
        ${fullWidth && style.fullWidth}
        ${roundedFull && style.roundedFull}
        ${disabled && style.disabled}
    `}
    title={tooltip || ''}
    {...buttonProps}
  >
    <div className={style.buttonChild}>
      {isLoading && <Spinning />}
      {!isLoading && icon && <Icon src={icon} width={14} height={14} />}
      {children}
    </div>
  </button>
)

export default memo(Button)
