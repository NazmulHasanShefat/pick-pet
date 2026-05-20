export default function SkeletonCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {Array.from({ length: 4 }).map((_, index) => {
        return (
          <div
            key={index}
            className="w-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden shadow-sm"
          >
            {/* Image Skeleton */}
            <div className="w-full h-56 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-t-2xl"></div>

            {/* Content */}
            <div className="p-4 space-y-3">
              {/* Name */}
              <div className="h-7 w-28 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md"></div>

              {/* Description lines */}
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md"></div>
                <div className="h-4 w-4/5 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md"></div>
              </div>

              {/* Location */}
              <div className="h-4 w-36 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md"></div>

              {/* Adoption fee */}
              <div className="h-4 w-44 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md"></div>

              {/* Buttons */}
              <div className="flex gap-3 pt-1">
                <div className="h-9 w-32 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-full"></div>
                <div className="h-9 w-36 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-full"></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
