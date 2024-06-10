import {
  BadgeDollarSign,
  BadgeHelp,
  BarChartBig,
  BellRing,
  Box,
  CircleUserRound,
  Contact,
  LayoutDashboard,
  Mail,
  Settings,
  Shirt,
  Store,
  Truck,
} from 'lucide-react';

export const adminDashboardLinks = [
  {
    id: 1,
    label: 'Dashboard',
    path: '/store/merchants/admin',
    icon: LayoutDashboard,
  },
  {
    id: 2,
    label: 'User Roles',
    path: '/store/merchants/admin/user-roles',
    icon: CircleUserRound,
  },
  {
    id: 9,
    label: 'Store',
    path: '/store/merchants/admin/store-preview',
    icon: Store,
  },
  {
    id: 3,
    label: 'Customers',
    path: '/store/merchants/admin/customers',
    icon: Contact,
  },
  {
    id: 4,
    label: 'Products',
    path: '/store/merchants/admin/products',
    icon: Shirt,
  },
  {
    id: 5,
    label: 'Orders',
    path: '/store/merchants/admin/orders',
    icon: Box,
  },

  {
    id: 7,
    label: 'Delivery',
    path: '/store/merchants/admin/delivery',
    icon: Truck,
  },
  {
    id: 6,
    label: 'Sales',
    path: '/store/merchants/admin/sales',
    icon: BarChartBig,
  },
  {
    id: 8,
    label: 'Transactions',
    path: '/store/merchants/admin/delivery',
    icon: BadgeDollarSign,
  },
];

export const adminStoreLinks = [
  {
    id: 1,
    label: 'Messages',
    icon: Mail,
    path: '/store/merchants/admin/Messages',
  },
  {
    id: 2,
    label: 'Notifications',
    icon: BellRing,
    path: '/store/merchants/admin/notifications',
  },
  {
    id: 3,
    label: 'Settings',
    icon: Settings,
    path: 'store/merchants/admin/settings',
  },
  {
    id: 4,
    label: 'Help Center',
    icon: BadgeHelp,
    path: '/store/merchants/admin/help',
  },
];
