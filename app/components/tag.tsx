import React, { ReactNode } from 'react'

const Tag = ({children}: {children?: ReactNode}) => {
  return (
    <div className='bg-[#140F10] text-gray-100 rounded-md px-2 py-1 text-center'>
        {children || 'Tag'}
    </div>
  )
}

export default Tag