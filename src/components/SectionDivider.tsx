import HorizontalDivider from './HorizontalDivider'

interface SectionDividerProps {
  title: string;
}

export default function SectionDivider({ title }: SectionDividerProps) {
  return (
    <div className='flex'>
      <HorizontalDivider width='long' color='primary' />
      {title}
      <HorizontalDivider width='long' color='primary' />
    </div>
  )
}
