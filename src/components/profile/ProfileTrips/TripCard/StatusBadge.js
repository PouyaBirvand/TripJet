const StatusBadge = ({ statusInfo }) => (
  <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${statusInfo.color}`}>
    {statusInfo.icon}
    {statusInfo.text}
  </div>
);

export default StatusBadge;
