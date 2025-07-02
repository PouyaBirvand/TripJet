import { X, Check } from 'lucide-react';

export default function ProfileImageModal({
  isOpen,
  onClose,
  newImage,
  editorRef,
  scale,
  setScale,
  onSave,
  onRemove,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="bg-white max-w-md w-full shadow-xl rounded-xl border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-5">
          <h3 className="font-bold text-lg">ویرایش تصویر پروفایل</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex flex-col items-center">
          {/* <div className="mb-5 ring-2 ring-primary/20 rounded-full p-1">
            <AvatarEditor
              ref={editorRef}
              image={newImage}
              width={250}
              height={250}
              border={50}
              borderRadius={125}
              color={[255, 255, 255, 0.6]}
              scale={scale}
              rotate={0}
            />
          </div> */}

          <div className="w-full mb-6">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">بزرگنمایی</span>
              <span className="text-gray-500">{Math.round((scale - 1) * 100)}%</span>
            </div>
            <input
              type="range"
              min="1"
              max="2"
              step="0.01"
              value={scale}
              onChange={e => setScale(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-gray-400 px-1 mt-1">
              <span>کوچک</span>
              <span>بزرگ</span>
            </div>
          </div>

          <div className="flex gap-3 w-full mt-4">
            <button
              onClick={onRemove}
              className="flex-1 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center gap-1.5 font-medium"
            >
              <X size={16} />
              حذف تصویر
            </button>
            <button
              onClick={onSave}
              className="flex-1 py-2.5 bg-blue-600 rounded-lg hover:bg-blue-600 text-white/90 transition-colors flex items-center justify-center gap-1.5 font-medium"
            >
              <Check size={16} />
              ذخیره تصویر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
