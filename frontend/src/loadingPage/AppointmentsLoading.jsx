import React from 'react';

export default function AppointmentsLoading({ count = 3 }) {
  const items = Array.from({ length: count });

    
  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">My appointments</p>
      <div>
        {items.map((_, idx) => (
          <div
            key={idx}
            role="status"
            aria-label="loading appointment"
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b animate-pulse"
          >
            {/* Doctor image */}
            <div>
              <div className="w-32 h-30 bg-gray-200 rounded-md" />
            </div>

            {/* Doctor details */}
            <div className="flex-1 text-sm text-zinc-600 space-y-2">
              <div className="h-4 w-32 bg-gray-200 rounded-md" />
              <div className="h-3 w-24 bg-gray-200 rounded-md" />
              <div className="h-4 w-20 bg-gray-200 rounded-md mt-2" />
              <div className="h-3 w-40 bg-gray-200 rounded-md" />
              <div className="h-3 w-36 bg-gray-200 rounded-md" />
              <div className="h-4 w-48 bg-gray-200 rounded-md mt-2" />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2 justify-end mt-2 sm:mt-0">
              <div className="h-9 w-40 bg-gray-200 rounded-md" />
              <div className="h-9 w-40 bg-gray-200 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

