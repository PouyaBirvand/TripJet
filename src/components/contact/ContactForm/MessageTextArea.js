'use client';
import CustomTextArea from '../../common/CustomTextArea';

export default function MessageTextArea() {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-2">متن پیام</label>
      <CustomTextArea name="message" placeholder="متن پیام خود را بنویسید..." rows="4" />
    </div>
  );
}
