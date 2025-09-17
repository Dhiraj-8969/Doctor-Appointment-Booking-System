import React from 'react';

function LoadingAllDoc({ count = 12 }) {
  const items = Array.from({ length: count });

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll animate-pulse'>
      <h1 className='text-lg font-medium'>All Doctors</h1>
      <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
        {items.map((_, index) => (
          <div
            key={index}
            className='border border-indigo-200 rounded-xl max-w-60 overflow-hidden cursor-default'
          >
            {/* Image placeholder */}
            <div className='bg-gray-200 h-55 w-full' />

            {/* Details */}
            <div className='p-4 space-y-2'>
              <div className='h-5 w-47 bg-gray-200 rounded-md' />
              <div className='h-4 w-24 bg-gray-200 rounded-md' />
              <div className='mt-2 flex items-center gap-1'>
                <div className='h-4 w-4 bg-gray-200 rounded' />
                <div className='h-3 w-20 bg-gray-200 rounded-md' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default LoadingAllDoc
