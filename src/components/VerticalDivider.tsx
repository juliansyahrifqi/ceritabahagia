import classNames from 'classnames';

interface VerticalDividerProps {
  width: 'short' | 'long';
  color: 'white' | 'primary';
}

export default function VerticalDivider({ width, color }: VerticalDividerProps) {
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
