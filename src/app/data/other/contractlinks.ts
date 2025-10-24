import { LinkedinIcon, GithubIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { ContactInfoType, SocialLinkType } from '../../types/other/contract';

export const contactInfo: ContactInfoType = {
  phone: '+92 342 0339016',
  email: 'muhammadsaqibyounas11@gmail.com',
  location: 'Lahore, Pakistan',
};

export const socialLinks: SocialLinkType[] = [
  {
    name: 'LinkedIn',
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/muhammad-saqib-younas-0123aa329',
    color: 'text-blue-400 hover:text-blue-600',
  },
  {
    name: 'GitHub',
    icon: GithubIcon,
    href: 'https://github.com/SaqibYounas',
    color: 'text-gray-200 hover:text-gray-400',
  },
  {
    name: 'Email',
    icon: MailIcon,
    href: 'mailto:muhammadsaqibyounas11@gmail.com',
    color: 'text-red-400 hover:text-red-600',
  },
  {
    name: 'Phone',
    icon: PhoneIcon,
    href: 'tel:+923420339016',
    color: 'text-green-400 hover:text-green-600',
  },
];
