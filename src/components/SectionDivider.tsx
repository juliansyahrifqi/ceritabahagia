import HorizontalDivider from './HorizontalDivider'

interface SectionDividerProps {
  title: string;
}

export default function SectionDivider({ title }: SectionDividerProps) {
  return (
    <div className='flex items-center gap-8'>
      <HorizontalDivider width='long' color='primary' />
      <h2 className='text-2xl font-bold text-black'>{title}</h2>
      <HorizontalDivider width='long' color='primary' />
    </div>
  )
}
