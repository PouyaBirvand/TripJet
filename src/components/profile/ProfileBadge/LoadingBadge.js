import { Plus, Upload, Wallet } from 'lucide-react';

export default function LoadingBadge() {
  return (
    <div className="border pb-5 pl-5 pr-5 pt-3 rounded-xl border-base-300 bg-white w-72">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="skeleton w-[50px] h-[50px] rounded-full"></div>
            <button
              className="absolute -bottom-1 -right-1 bg-blue-600 text-white rounded-full p-1 shadow-md"
              title="تغییر تصویر پروفایل"
              disabled={true}
            >
              <Upload size={14} />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <h6 className="flex flex-col gap-2 mt-2">
              <div className="skeleton w-24 h-4"></div>
              <span className="skeleton w-16 h-4"></span>
            </h6>
          </div>
        </div>
        <div className="w-full">
          <h6 className="flex gap-1 mr-2">
            <Wallet className="!text-blue-600" size={21} />
            <div className="skeleton w-16 h-4"></div>
          </h6>
          <button
            type="button"
            className="w-full py-3 px-5 bg-sky-100 !text-blue-600 border-none rounded-lg flex items-center justify-between flex-row-reverse"
            disabled={true}
          >
            <div className="skeleton w-20 h-4"></div>
            <Plus
              size={23}
              strokeWidth={2}
              className="!text-blue-600 border-2 border-primary rounded-lg"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
