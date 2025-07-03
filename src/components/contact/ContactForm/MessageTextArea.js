'use client';
import CustomTextArea from '../../common/CustomTextArea';

export default function MessageTextArea() {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        متن پیام
        <span className="text-red-500 mr-1">*</span>
      </label>
      <CustomTextArea
        name="message"
        placeholder="متن پیام خود را بنویسید..."
        rows="5"
        className="resize-none outline-none p-3"
      />
      <p className="text-xs text-gray-500">حداقل ۱۰ کاراکتر وارد کنید</p>
    </div>
  );
}
