import React from 'react';

// AppointmentsSkeleton.jsx
// Tailwind CSS React component that mirrors the appointments table layout
// Usage: <AppointmentsSkeleton count={6} />

export default function AppointmentLoading({ count = 10 }) {
  const items = Array.from({ length: count });

  return (
    <div className='m-5 animate-pulse'>
      <div className='bg-white border border-gray-200 rounded'>
        {items.map((_, index) => (
          <div
            key={index}
            className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center py-3 px-6 border-b'
          >
            {/* Index */}
            <div className='h-3 w-4 bg-gray-200 rounded-md max-sm:hidden' />

            {/* User */}
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 bg-gray-200 rounded-full' />
              <div className='h-3 w-24 bg-gray-200 rounded-md' />
            </div>

            {/* Age */}
            <div className='h-3 w-8 bg-gray-200 rounded-md max-sm:hidden' />

            {/* Date & Time */}
            <div className='h-3 w-32 bg-gray-200 rounded-md' />

            {/* Doctor */}
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 bg-gray-200 rounded-full' />
              <div className='h-3 w-24 bg-gray-200 rounded-md' />
            </div>

            {/* Amount */}
            <div className='h-3 w-10 bg-gray-200 rounded-md' />

            {/* Status/Action */}
            <div className='h-6 w-16 bg-gray-200 rounded-md' />
          </div>
        ))}
      </div>
    </div>
  );
}

