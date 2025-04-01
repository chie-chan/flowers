import { Twitter, Facebook, MessageSquare } from "lucide-react";

interface SocialShareProps {
  title: string;
  url: string;
}

export default function SocialShare({ title, url }: SocialShareProps) {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className="flex items-center gap-4">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-[#1DA1F2] p-2 text-white hover:bg-[#1a8cd8]"
      >
        <Twitter className="h-5 w-5" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-[#1877F2] p-2 text-white hover:bg-[#1664d9]"
      >
        <Facebook className="h-5 w-5" />
      </a>
      <a
        href={`https://social-plugins.line.me/lineit/share?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-[#00B900] p-2 text-white hover:bg-[#009900]"
      >
        <MessageSquare className="h-5 w-5" />
      </a>
    </div>
  );
} 