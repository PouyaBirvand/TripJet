export default function TourPlans({ tour, isMobile }) {
    if (!tour.tourPlans || tour.tourPlans.length === 0) {
      return null;
    }
  
    return (
      <div>
        <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
          برنامه تفصیلی سفر
        </h4>
        <div className="space-y-2 sm:space-y-3">
          {tour.tourPlans.slice(0, isMobile ? 3 : tour.tourPlans.length).map((plan, index) => (
            <div
              key={plan.id}
              className="p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center text-xs font-medium mt-0.5 flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                    {plan.title}
                  </p>
                  <p className="text-xs text-gray-600">{plan.day}</p>
                </div>
              </div>
            </div>
          ))}
          {isMobile && tour.tourPlans.length > 3 && (
            <div className="text-xs text-blue-600 text-center py-2">
              +{tour.tourPlans.length - 3} برنامه دیگر
            </div>
          )}
        </div>
      </div>
    );
  }
  