"use client"
import { useState } from "react";
import TripTypeSelector from "./TripTypeSelector";
import TripSearchForm from "./TripSearchForm";

export default function TripSearch() {
  const [selectedType, setSelectedType] = useState("domestic"); // نوع پیش‌فرض سفر

  return (
    <div className="bg-white relative z-[9] p-6 rounded-xl border border-slate-300 mt-45">
      <h1 className="text-2xl font-medium mb-4">جستجوی تور</h1>
      <TripTypeSelector 
      selectedType={selectedType} 
        onTypeChange={setSelectedType} 
      />
      <TripSearchForm tripType={selectedType} />
    </div>
  );
}
