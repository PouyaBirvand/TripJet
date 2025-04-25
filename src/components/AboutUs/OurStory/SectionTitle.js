export default function SectionTitle({ icon, title }) {
    return (
      <h2 className="text-2xl font-bold mb-15 text-right flex items-center gap-2">
        {icon}
        {title}
      </h2>
    );
  }