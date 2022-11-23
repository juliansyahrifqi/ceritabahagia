import classNames from 'classnames';

interface ButtonProps {
  title: string;
  isPrimary: boolean;
  size: 'small' | 'medium' | 'large';
}

export default function Button({ title, isPrimary, size }: ButtonProps) {
  const btnClass = classNames({
    'bg-semigold hover:bg-gold text-hover-gold': isPrimary === true,
    'bg-button-secondary hover:bg-blue-primary text-blue-primary hover:text-white': isPrimary === false,
    'py-5 px-6': size === 'large',
    'py-4 px-5': size === 'medium',
    'py-3 px-4': size === 'small',
  }, 'duration-500 rounded-full font-bold') 

  return (
    <button className={btnClass}>
      {title}
    </button>
  )
}
