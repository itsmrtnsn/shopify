import {
  ArchiveIcon,
  AvatarIcon,
  BarChartIcon,
  CrumpledPaperIcon,
  IdCardIcon,
  MixIcon,
  PersonIcon,
  RocketIcon,
} from '@radix-ui/react-icons';

const sidebarLinks = [
  { id: 1, label: 'Overview', path: '/overview', icon: MixIcon },
  { id: 2, label: 'User Roles', path: '/user-roles', icon: IdCardIcon },
  { id: 3, label: 'Customers', path: '/customers', icon: AvatarIcon },
  { id: 3, label: 'Products', path: '/products', icon: ArchiveIcon },
  { id: 4, label: 'Orders', path: '/orders', icon: CrumpledPaperIcon },
  { id: 5, label: 'Sales', path: '/sales', icon: BarChartIcon },
  { id: 6, label: 'Delivery', path: '/delivery', icon: RocketIcon },
];

export default sidebarLinks;
