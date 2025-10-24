import { LucideIcon } from 'lucide-react';

export interface ContactInfoType {
  phone: string;
  email: string;
  location: string;
}

export interface SocialLinkType {
  name: string;
  icon: LucideIcon;
  href: string;
  color: string;
}
