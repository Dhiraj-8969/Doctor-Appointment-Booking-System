import React from 'react';

// DashboardSkeleton.jsx
// Tailwind CSS React component that mirrors the dashboard layout
// Usage: <DashboardSkeleton />

export default function DashBoaedLoading({ count = 5 }) {
  const items = Array.from({ length: count });

  return (
    <div className='m-5 animate-pulse'>
      {/* Top summary cards */}
      <div className='flex flex-wrap gap-3'>
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100'
          >
            <div className='w-14 h-14 bg-gray-200 rounded-md' />
            <div className='space-y-1'>
              <div className='h-5 w-16 bg-gray-200 rounded-md' />
              <div className='h-3 w-20 bg-gray-200 rounded-md' />
            </div>
          </div>
        ))}
      </div>

      {/* Latest Bookings Section */}
      <div className='bg-white mt-10 border border-gray-200 rounded'>
        <div className='flex items-center gap-2.5 px-4 py-4 border-b border-gray-200'>
          <div className='w-5 h-5 bg-gray-200 rounded-md' />
          <div className='h-4 w-32 bg-gray-200 rounded-md' />
        </div>

        <div className='pt-4'>
          {items.map((_, index) => (
            <div
              key={index}
              className='flex items-center px-6 py-3 gap-3 hover:bg-gray-50'
            >
              <div className='w-10 h-10 bg-gray-200 rounded-full' />
              <div className='flex-1 space-y-1'>
                <div className='h-4 w-32 bg-gray-200 rounded-md' />
                <div className='h-3 w-24 bg-gray-200 rounded-md' />
              </div>
              <div className='h-3 w-16 bg-gray-200 rounded-md' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
