/**
 * SkeletonCard – animated placeholder while doctor data is loading
 */
const SkeletonCard = () => (
  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col md:flex-row gap-6 animate-pulse">
    {/* Image placeholder */}
    <div className="w-full md:w-48 h-48 rounded-lg bg-gray-200 shrink-0" />
    {/* Content placeholders */}
    <div className="flex-1 flex flex-col justify-between py-2">
      <div className="space-y-3">
        <div className="h-5 bg-gray-200 rounded w-3/5" />
        <div className="h-3 bg-gray-200 rounded w-2/5" />
        <div className="flex gap-4 mt-4">
          <div className="h-3 bg-gray-200 rounded w-24" />
          <div className="h-3 bg-gray-200 rounded w-20" />
          <div className="h-3 bg-gray-200 rounded w-24" />
        </div>
      </div>
      <div className="flex justify-between items-end pt-4 border-t border-gray-100 mt-4">
        <div className="space-y-1">
          <div className="h-2 bg-gray-200 rounded w-24" />
          <div className="h-6 bg-gray-200 rounded w-20" />
        </div>
        <div className="h-10 bg-gray-200 rounded-lg w-36" />
      </div>
    </div>
  </div>
);

export default SkeletonCard;
