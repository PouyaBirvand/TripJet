export default function StoryParagraph({ children, noMargin = false }) {
  return (
    <p className={`text-slate-500 leading-7 text-justify ${noMargin ? '' : 'mb-8'} text-lg`}>
      {children}
    </p>
  );
}
