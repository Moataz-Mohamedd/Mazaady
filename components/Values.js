import React from 'react'

const Values = () => {
  return (
    <div className='grid gap-y-3'>
        <div className='flex justify-between items-center h-12 p-3 text-[#707070] bg-[#707070] bg-opacity-10 rounded-md'>
            <p className='text-sm'>القيمة الابتدائية</p>
            <p className='text-2xl font-bold'>5000</p>
        </div>
        <div className='flex justify-between items-center h-12 p-3 text-[#707070] bg-[#707070] bg-opacity-10 rounded-md'>
            <p className='text-sm'>القيمة التقريبية</p>
            <p className='text-2xl font-bold'>5000</p>
        </div>
        <div className='flex justify-between items-center h-12 p-3 text-[#707070] bg-[#707070] bg-opacity-10 rounded-md'>
            <p className='text-sm'> العربون</p>
            <p className='text-2xl font-bold'>5000</p>
        </div>
        <div className='flex justify-between items-center h-12 p-3 text-[#707070] bg-[#707070] bg-opacity-10 rounded-md'>
            <p className='text-sm'> سعر الشراء الفوري</p>
            <p className='text-2xl font-bold'>5000</p>
        </div>
        <div className='flex justify-between items-center h-12 p-3 text-[#707070] bg-[#707070] bg-opacity-10 rounded-md'>
            <p className='text-sm'> قيمة زيادة المزاد</p>
            <p className='text-2xl font-bold'>5000</p>
        </div>
        
    </div>
  )
}

export default Values
