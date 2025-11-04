import React, { ReactNode } from 'react'

interface BoxProps {
    children ?: ReactNode
    TopText ?: string
    Subtitle ?: string
}

const Box = ({children, TopText, Subtitle} : BoxProps) => {
  return (
    <div className='flex-col justify-center align-center bg-[#140F10] rounded-md px-6 py-4'>
        <div className='text-md text-[#C96065]'>{children}{TopText}</div>
        <div className='text-sm text-[#C96065]'>{Subtitle}</div>
    </div>
  )
}

export default Box