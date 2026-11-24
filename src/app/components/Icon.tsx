import { Bell, CheckCheck, Download, Globe, Image, ListFilter, Lock, Search, Send, Sparkles, Type, UserPlus } from "lucide-react";

const map = {
  lock: Lock,
  bell: Bell,
  search: Search,
  type: Type,
  read: CheckCheck,
  filter: ListFilter,
  image: Image,
  spark: Sparkles,
  globe: Globe,
  download: Download,
  userPlus: UserPlus,
  send: Send,
};

export type IconName = keyof typeof map;

/** Icon in a small blue tile. */
export default function Icon({ name }: { name: string }) {
  const C = map[name as IconName] ?? Sparkles;
  return (
    <span className="ico" aria-hidden="true">
      <C size={20} strokeWidth={2} />
    </span>
  );
}
