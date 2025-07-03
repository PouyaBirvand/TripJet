export default function ContactCardDecorations() {
  return (
    <>
      {/* Decorative circles with better responsive positioning */}
      <div className="absolute w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-blue-700/60 rounded-full top-4 sm:top-8 -right-8 sm:-right-12 z-0" />
      <div className="absolute w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 bg-blue-800/40 rounded-full -bottom-16 sm:-bottom-20 -left-8 sm:-left-16 z-0" />
      
      {/* Additional subtle decorations */}
      <div className="absolute w-16 h-16 sm:w-20 sm:h-20 bg-blue-500/30 rounded-full top-1/2 -left-4 sm:-left-8 z-0" />
      <div className="absolute w-8 h-8 sm:w-12 sm:h-12 bg-blue-400/40 rounded-full bottom-1/4 -right-2 sm:-right-4 z-0" />
    </>
  );
}
