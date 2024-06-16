import {
  BadgeDollarSign,
  BadgeHelp,
  BarChartBig,
  BellRing,
  Box,
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
    label: 'OverView',
    path: '/store/merchants',
    icon: LayoutDashboard,
  },
  {
    id: 3,
    label: 'Customers',
    path: '/store/merchants/customers',
    icon: Contact,
  },
  {
    id: 9,
    label: 'Store',
    path: '/store/merchants/store',
    icon: Store,
  },

  {
    id: 4,
    label: 'Products',
    path: '/store/merchants/products',
    icon: Shirt,
  },
  {
    id: 5,
    label: 'Orders',
    path: '/store/merchants/orders',
    icon: Box,
  },

  {
    id: 7,
    label: 'Delivery',
    path: '/store/merchants/delivery',
    icon: Truck,
  },
  {
    id: 6,
    label: 'Sales',
    path: '/store/merchants/sales',
    icon: BarChartBig,
  },
  {
    id: 8,
    label: 'Transactions',
    path: '/store/merchants/transactions',
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
