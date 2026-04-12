export interface AiApp {
  id: string;
  name: string;
  description: string;
  category: string;
  status: 'Live' | 'Coming Soon';
  actionLabel: 'Open' | 'Analyze';
  route?: string;
}