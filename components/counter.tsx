'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'

export default function Counter() {
  const [counter, setCounter] = useState(0)
  const increment = () => setCounter(counter + 1)
  const decrement = () => setCounter(counter - 1)

  return (
    <div className='flex items-center gap-3'>
      <Button size='icon' onClick={decrement}>
        <MinusIcon />
      </Button>
      <span>{counter}</span>
      <Button size='icon' onClick={increment}>
        <PlusIcon />
      </Button>
    </div>
  )
}
