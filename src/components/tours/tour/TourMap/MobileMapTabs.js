import { Map, List } from 'lucide-react';

export default function MobileMapTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex border-b border-gray-200 bg-white">
      <button
        onClick={() => setActiveTab('map')}
        className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium transition-colors ${
          activeTab === 'map'
            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <Map className="w-4 h-4" />
        نقشه
      </button>
      
      <button
        onClick={() => setActiveTab('info')}
        className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium transition-colors ${
          activeTab === 'info'
            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <List className="w-4 h-4" />
        اطلاعات
      </button>
    </div>
  );
}
