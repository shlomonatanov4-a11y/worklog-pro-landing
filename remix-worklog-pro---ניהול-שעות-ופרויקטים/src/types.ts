export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  badgeColor?: string;
  benefits?: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface TargetAudience {
  id: string;
  icon: string;
  title: string;
  description: string;
  tag: string;
}

export interface ShiftRow {
  id: string;
  date: string;
  client: string;
  project: string;
  hours: number;
  rate: number;
  total: number;
  status: 'אושר' | 'הושלם' | 'פעיל';
}
