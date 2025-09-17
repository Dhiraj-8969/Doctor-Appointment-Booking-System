import React from 'react';

function LoadingAllDoc({ count = 12 }) {
  const items = Array.from({ length: count });

  return (
    <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
      {items.map((_, idx) => (
        <div
          key={idx}
          role="status"
          aria-label="loading card"
          className="border border-blue-200 rounded-xl overflow-hidden cursor-default animate-pulse"
        >
          {/* image skeleton */}
          <div className="bg-blue-50 h-40 sm:h-44 w-full flex items-center justify-center">
            <div className="w-24 h-24 rounded-md bg-gray-200" />
          </div>

          <div className="p-4">
            {/* availability row */}
            <div className="flex items-center gap-2 text-sm justify-center">
              <div className="w-2 h-2 bg-gray-200 rounded-full" />
              <div className="h-3 w-24 bg-gray-200 rounded-md" />
            </div>

            {/* name */}
            <div className="mt-3">
              <div className="h-5 w-3/4 bg-gray-200 rounded-md" />
            </div>

            {/* speciality */}
            <div className="mt-2">
              <div className="h-4 w-1/2 bg-gray-200 rounded-md" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


export default LoadingAllDoc