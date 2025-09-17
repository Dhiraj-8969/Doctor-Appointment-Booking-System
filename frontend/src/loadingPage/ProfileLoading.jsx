

export default function ProfileLoading() {
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm animate-pulse">
      {/* Profile image */}
      <div className="inline-block relative">
        <div className="w-36 h-36 bg-gray-200 rounded-md" />
      </div>

      {/* Name */}
      <div className="h-8 w-40 bg-gray-200 rounded-md mt-4" />

      <hr className="bg-zinc-400 h-[1px] border-none" />

      {/* Contact information */}
      <div>
        <div className="h-4 w-44 bg-gray-200 rounded-md mt-3" />
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3">
          <div className="h-3 w-16 bg-gray-200 rounded-md" />
          <div className="h-3 w-32 bg-gray-200 rounded-md" />

          <div className="h-3 w-16 bg-gray-200 rounded-md" />
          <div className="h-3 w-28 bg-gray-200 rounded-md" />

          <div className="h-3 w-16 bg-gray-200 rounded-md" />
          <div className="space-y-1">
            <div className="h-3 w-40 bg-gray-200 rounded-md" />
            <div className="h-3 w-36 bg-gray-200 rounded-md" />
          </div>
        </div>
      </div>

      {/* Basic information */}
      <div>
        <div className="h-4 w-44 bg-gray-200 rounded-md mt-3" />
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3">
          <div className="h-3 w-16 bg-gray-200 rounded-md" />
          <div className="h-3 w-24 bg-gray-200 rounded-md" />

          <div className="h-3 w-16 bg-gray-200 rounded-md" />
          <div className="h-3 w-28 bg-gray-200 rounded-md" />
        </div>
      </div>

      {/* Button */}
      <div className="mt-10">
        <div className="h-10 w-44 bg-gray-200 rounded-full" />
      </div>
    </div>
  );
}


