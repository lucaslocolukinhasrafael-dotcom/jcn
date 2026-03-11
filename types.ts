import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface ProductParam {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface Differential {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}
