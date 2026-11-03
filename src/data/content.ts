export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export type Skill = {
  name: string;
  blurb: string;
  // key into the simple-icons package
  icon: string;
  color: string;
};

export const SKILLS: Skill[] = [
  {
    name: 'Meta Ads',
    blurb: 'Audience targeting & creative testing across Meta platforms.',
    icon: 'siMeta',
    color: '#0467DF',
  },
  {
    name: 'Google Ads',
    blurb: 'Search, Display & Performance Max campaign management.',
    icon: 'siGoogleads',
    color: '#4285F4',
  },
  {
    name: 'GA4',
    blurb: 'Event tracking, funnel analysis & audience insights.',
    icon: 'siGoogleanalytics',
    color: '#E37400',
  },
  {
    name: 'Facebook Ads',
    blurb: 'Lead generation & retargeting on Facebook.',
    icon: 'siFacebook',
    color: '#1877F2',
  },
  {
    name: 'Instagram Ads',
    blurb: 'Story, Reel & feed campaigns for brand growth.',
    icon: 'siInstagram',
    color: '#E4405F',
  },
  {
    name: 'Google Tag Manager',
    blurb: 'Server-side & web tagging for clean tracking.',
    icon: 'siGoogletagmanager',
    color: '#246FDB',
  },
  {
    name: 'Conversion Tracking',
    blurb: 'Pixel setup, CAPI & event-based measurement.',
    icon: 'siGooglemarketingplatform',
    color: '#B366FF',
  },
  {
    name: 'Campaign Optimization',
    blurb: 'A/B testing, bid strategy & creative iteration.',
    icon: 'siGoogleads',
    color: '#1677FF',
  },
];

export type Project = {
  title: string;
  tag: string;
  description: string;
  image: string;
  alt: string;
  points: string[];
};

export const PROJECTS: Project[] = [
  {
    title: 'Meta Ads Campaign',
    tag: 'Paid Social',
    description:
      'A demo Meta Ads campaign structured around audience segmentation and creative testing to improve engagement on Facebook and Instagram.',
    image:
      'https://images.pexels.com/photos/15635241/pexels-photo-15635241.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Social media marketing planning document on a desk',
    points: ['Audience segmentation', 'Creative testing', 'Engagement analysis'],
  },
  {
    title: 'Google Ads Campaign',
    tag: 'Search & Display',
    description:
      'A demo Google Ads campaign with keyword research, ad copy variants, and a bidding strategy focused on relevant search intent.',
    image:
      'https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Laptop showing data visualizations and charts',
    points: ['Keyword research', 'Ad copy variants', 'Bid strategy'],
  },
  {
    title: 'Lead Generation Campaign',
    tag: 'Performance',
    description:
      'A demo lead-gen funnel built with Meta lead forms and a landing page, capturing qualified leads for a service business.',
    image:
      'https://images.pexels.com/photos/7688106/pexels-photo-7688106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Two professionals collaborating on marketing strategy',
    points: ['Lead form design', 'Landing page', 'Follow-up automation'],
  },
  {
    title: 'Website Traffic Campaign',
    tag: 'Growth',
    description:
      'A demo campaign to drive qualified traffic to a website through a mix of paid social and search, measured in GA4.',
    image:
      'https://images.pexels.com/photos/139387/pexels-photo-139387.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Laptop displaying Google Analytics in a modern workspace',
    points: ['Traffic sourcing', 'GA4 measurement', 'Audience building'],
  },
  {
    title: 'Conversion Tracking Project',
    tag: 'Measurement',
    description:
      'A demo tracking setup using Google Tag Manager and GA4 events with Conversion API for accurate conversion attribution.',
    image:
      'https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Laptop displaying an analytics dashboard',
    points: ['GTM container setup', 'GA4 events', 'Conversion API'],
  },
];

export type PortfolioItem = {
  title: string;
  category: string;
  image: string;
  alt: string;
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    title: 'Festive Sale Ad Creative',
    category: 'Ad Creatives',
    image:
      'https://images.pexels.com/photos/5868274/pexels-photo-5868274.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Woman holding a 50% off sale poster',
  },
  {
    title: 'Promotional Banner',
    category: 'Marketing Banners',
    image:
      'https://images.pexels.com/photos/7986993/pexels-photo-7986993.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Red sale sign with confetti',
  },
  {
    title: 'Discount Promo Poster',
    category: 'Social Posters',
    image:
      'https://images.pexels.com/photos/7986987/pexels-photo-7986987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modern sale tag offering 50% discount on red background',
  },
  {
    title: 'Campaign Screenshot',
    category: 'Campaign Screenshots',
    image:
      'https://images.pexels.com/photos/37685036/pexels-photo-37685036.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Business professional analyzing bar chart on tablet',
  },
  {
    title: 'Brand Engagement Post',
    category: 'Social Posters',
    image:
      'https://images.pexels.com/photos/30383665/pexels-photo-30383665.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Chalkboard promoting Facebook engagement',
  },
  {
    title: 'Website Project',
    category: 'Website Projects',
    image:
      'https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Stylish workspace with a laptop and design software',
  },
];

export type Stat = { value: string; label: string };

export const STATS: Stat[] = [
  { value: '8+', label: 'Marketing Tools' },
  { value: '5', label: 'Demo Projects' },
  { value: 'B.Sc', label: 'Physics Graduate' },
  { value: '100%', label: 'Driven to Learn' },
];
