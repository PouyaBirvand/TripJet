export default function MapFooter({ tourLocations, isMobile }) {
    return (
      <div className="p-3 sm:p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600">
          <div className="flex items-center gap-2 sm:gap-4">
            <span>📍 {tourLocations.length} مقصد گردشگری</span>
          </div>
          {!isMobile && (
            <div className="flex items-center gap-4">
              <span>⌨️ ESC برای بستن</span>
            </div>
          )}
        </div>
      </div>
    );
  }