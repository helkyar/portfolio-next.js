'use client'
import { Button, Input } from '@/components/ui'
import { useParamsFromUrl } from '@/lib/params-url'
import { useTranslation } from '@/lib/translations'
import { Cross2Icon } from '@radix-ui/react-icons'

type PropTypes = {
  readonly query: string
}

export function SearchBarParams({ query }: PropTypes) {
  const { t } = useTranslation('Components.SearchBar')
  const { updateUrlParam, currentParam } = useParamsFromUrl(query)

  const isQueryFiltered = currentParam.length > 0
  return (
    <div className='mb-12 flex items-center gap-3'>
      <Input
        type='text'
        placeholder='react, next, ...'
        className='h-9 flex-1'
        defaultValue={currentParam}
        onChange={(e) => updateUrlParam(e.target.value)}
      />
      {isQueryFiltered && (
        <Button
          size='sm'
          variant='secondary'
          onClick={() => updateUrlParam('')}
          className='h-8 px-2 lg:px-3'
        >
          {t('reset')}
          <Cross2Icon className='ml-2 h-4 w-4' />
        </Button>
      )}
    </div>
  )
}
