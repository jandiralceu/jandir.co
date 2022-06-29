import * as React from 'react'

type Props = {
  text: string
} & React.ComponentPropsWithoutRef<'span'>

// eslint-disable-next-line react/prop-types
export const Chips = ({ text, className, ...rest }: Props) => {
  return (
    <span
      className={[
        'text-sm h-9 px-5 flex items-center cursor-pointer rounded-3xl',
        className
      ].join(' ')}
      {...rest}
    >
      {text}
    </span>
  )
}
