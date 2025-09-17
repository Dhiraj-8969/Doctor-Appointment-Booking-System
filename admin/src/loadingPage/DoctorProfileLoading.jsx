import React from 'react';

// DoctorProfileSkeleton.jsx
// Tailwind CSS React component that mirrors the doctor profile layout
// Usage: <DoctorProfileSkeleton />

export default function DoctorProfileLoading(){
  return (
    
      <div className="flex flex-col gap-4 m-5 animate-pulse">
        {/* Profile Image */}
        <div>
          <div className="bg-gray-200 w-full sm:max-w-64 h-64 rounded-lg" />
        </div>

        {/* Profile Details */}
        <div className="flex-1 w-180 border border-stone-100 rounded-lg p-8 py-7 bg-white space-y-3">
          {/* Name */}
          <div className="h-7 w-52 bg-gray-200 rounded-md" />

          {/* Degree & speciality */}
          <div className="flex items-center gap-2">
            <div className="h-4 w-40 bg-gray-200 rounded-md" />
            <div className="h-5 w-16 bg-gray-200 rounded-full" />
          </div>

          {/* About */}
          <div className="space-y-2 mt-3">
            <div className="h-4 w-20 bg-gray-200 rounded-md" />
            <div className="h-3 w-full max-w-md bg-gray-200 rounded-md" />
            <div className="h-3 w-3/4 bg-gray-200 rounded-md" />
          </div>

          {/* Fees */}
          <div className="h-4 w-44 bg-gray-200 rounded-md mt-4" />

          {/* Address */}
          <div className="space-y-1 mt-2">
            <div className="h-4 w-20 bg-gray-200 rounded-md" />
            <div className="h-3 w-64 bg-gray-200 rounded-md" />
            <div className="h-3 w-56 bg-gray-200 rounded-md" />
          </div>

          {/* Availability checkbox */}
          <div className="flex gap-2 pt-2 items-center">
            <div className="h-4 w-4 bg-gray-200 rounded" />
            <div className="h-3 w-20 bg-gray-200 rounded-md" />
          </div>

          {/* Button */}
          <div className="h-9 w-20 bg-gray-200 rounded-full mt-5" />
        </div>
      </div>
  );
}
