import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      <Link 
        href="https://www.instagram.com/" 
        aria-label="اینستاگرام"
        className="p-2 rounded-lg hover:text-blue-600 bg-slate-200"
      >
        <Instagram className="h-5 w-5" />
      </Link>
      <Link 
        href="https://www.linkedin.com/" 
        aria-label="لینکدین"
        className="p-2 rounded-lg hover:text-blue-600 bg-slate-200"
      >
        <Linkedin className="h-5 w-5" />
      </Link>
      <Link 
        href="mailto:tripjet@gmail.com" 
        aria-label="ایمیل"
        className="p-2 rounded-lg hover:text-blue-600 bg-slate-200"
      >
        <Mail className="h-5 w-5" />
      </Link>
    </div>
  );
};

export default SocialLinks;