import classNames from 'classnames';
import { HashLink } from 'react-router-hash-link';

interface ButtonProps {
  title: string;
  isPrimary: boolean;
  size: 'small' | 'medium' | 'large';
  link: string;
  linkType: 'external' | 'internal';
}

export default function Button({ title, isPrimary, size, link, linkType }: ButtonProps) {
  const btnClass = classNames({
    'bg-semigold hover:bg-gold text-hover-gold': isPrimary === true,
    'bg-button-secondary hover:bg-blue-primary text-blue-primary hover:text-white': isPrimary === false,
    'py-5 px-6 block': size === 'large',
    'py-4 px-5': size === 'medium',
    'py-3 px-4': size === 'small',
  }, 'duration-500 rounded-full font-bold cursor-pointer') 

  return (
    <>
      {linkType === 'external' ? (
        <a href={link} target="_blank" className={btnClass}>
          {title}
        </a>
      ) : (
        <HashLink smooth to={link} className={btnClass}>
          {title}
        </HashLink>
      )}
    </>
  )
}
