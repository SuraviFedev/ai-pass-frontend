export interface NavItem {
  label: string;
  route: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Workspace', route: '/' },
  { label: 'Automations', route: '/automations' },
  { label: 'AI Agents / Skills', route: '/agents' },
  { label: 'AI Apps', route: '/apps' },
  { label: 'Usage', route: '/usage' },
];