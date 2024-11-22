import { Cross2Icon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const t = { reset: 'Reset' }
type PropTypes = {
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  readonly query: string
  readonly reset: () => void
}

export default function SearchBar({ onChange, query, reset }: PropTypes) {
  const isQueryFiltered = query.length > 0
  return (
    <div className='mb-12 flex items-center gap-3'>
      <Input
        type='text'
        placeholder='react, next, ...'
        className='h-9 w-full'
        value={query}
        onChange={onChange}
      />
      {isQueryFiltered && (
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
