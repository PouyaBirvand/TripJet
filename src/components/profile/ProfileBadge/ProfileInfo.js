export default function ProfileInfo({ profile }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-3">
        <h6 className="flex flex-col gap-2 mt-2">
          {profile?.name || 'کاربر'}
          <span className="text-slate-400 text-sm font-normal">{profile?.phone || ''}</span>
        </h6>
      </div>
    </div>
  );
}
