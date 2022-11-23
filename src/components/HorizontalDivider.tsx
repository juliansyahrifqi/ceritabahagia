import classNames from 'classnames';

interface HorizontalDividerProps {
  width: 'short' | 'long';
  color: 'white' | 'primary';
}

export default function HorizontalDivider({ width, color }: HorizontalDividerProps) {
  const dividerClass = classNames({
    'w-16': width === 'short',
    'w-full': width === 'long',
    'border-white': color === 'white',
    'border-blue-primary': color === 'primary',
  }, 'border');

  return (
    <hr className={dividerClass} />
  )
}
