import React from 'react'

const layout = ({children}:
    {children:React.ReactNode}
) => {
  return (
    <div className='flex flex-col text-center justify-center items-center font-semibold bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 h-screen'>
        {children}
        </div>
  )
}

export default layout