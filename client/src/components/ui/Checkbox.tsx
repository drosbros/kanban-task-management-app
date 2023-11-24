'use client'

import React, { ChangeEvent } from 'react'
import { cn } from '@lib/utils'
import Icons from '@components/Icons'

type Props = {
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  label: string
  disabled?: boolean
  className?: string
}

function Checkbox({ label, checked, onChange }: Props) {
  return (
    <div>
      <label
        className={'flex gap-2 items-center px-4 py-2 bg-gray-light dark:bg-gray-very-dark rounded-md cursor-pointer'}
      >
        <div
          className={cn(
            'w-3 p-[0.6rem] aspect-square border border-gray-medium/25 rounded-sm overflow-hidden relative bg-white',
            {
              'bg-purple-default': checked,
            }
          )}
        >
          {checked && (
            <div className={'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'}>
              <Icons.check className={'w-full'} />
            </div>
          )}
        </div>
        <input type={'checkbox'} checked={checked} className={'appearance-none'} onChange={onChange} />
        <span
          className={cn('font-bold text-md', {
            'line-through opacity-50': checked,
          })}
        >
          {label}
        </span>
      </label>
    </div>
  )
}

export default Checkbox
