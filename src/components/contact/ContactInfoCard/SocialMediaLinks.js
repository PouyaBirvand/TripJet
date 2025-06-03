'use client';

import socialMediaData from './socialMediaData';

export default function SocialMediaLinks() {
  return (
    <div className="border-t border-blue-400 pt-6 mt-6">
      <h3 className="text-lg font-medium mb-4 text-center">ما را در شبکه‌های اجتماعی دنبال کنید</h3>
      <ul className="flex gap-5 items-center justify-center">
        {socialMediaData.map(item => (
          <SocialMediaIcon key={item.name} {...item} />
        ))}
      </ul>
    </div>
  );
}

function SocialMediaIcon({ icon, name, url = '#' }) {
  return (
    <li>
      <a
        href={url}
        className="block p-2 hover:bg-blue-500 rounded-full transition-colors"
        aria-label={name}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
      </a>
    </li>
  );
}
