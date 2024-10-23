import { Cross2Icon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const t = { reset: 'Reset' }
type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  query: string
  reset: () => void
}

export default function SearchBar({ onChange, query, reset }: Props) {
  const isProjectFiltered = query.length > 0
  return (
    <div className='mb-12 flex items-center gap-3'>
      <Input
        type='text'
        placeholder='react, next, ...'
        className='h-9 w-full sm:w-1/2'
        value={query}
        onChange={onChange}
      />
      {isProjectFiltered && (
        <Button
          size='sm'
          variant='secondary'
          onClick={reset}
          className='h-8 px-2 lg:px-3'
        >
          {t.reset}
          <Cross2Icon className='ml-2 h-4 w-4' />
        </Button>
      )}
    </div>
  )
}
