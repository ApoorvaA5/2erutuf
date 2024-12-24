export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: React.FC;
}

export interface LocationInfo {
  country: string;
  city: string;
}