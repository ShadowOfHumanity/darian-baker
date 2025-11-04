import React, { ReactNode } from 'react'

interface BoxProps {
    children ?: ReactNode
    TopText ?: string
    Subtitle ?: string
}

const Box = ({children, TopText, Subtitle} : BoxProps) => {
  return (
    <div className='w-44 h-28 flex flex-col justify-center bg-[#140F10] border-2 border-[#161616] rounded-md px-4 py-3'>
        <div className='text-2xl tracking-wide font-semibold text-[#8B6369]'>{children}{TopText}</div>
        <div className='text-sm text-gray-400'>{Subtitle}</div>
    </div>
  )
}

export default Box