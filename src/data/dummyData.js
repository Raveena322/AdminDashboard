// Dummy data for the dashboard

export const tasks = [
  { id: 1, title: 'Design new landing page', status: 'completed', priority: 'high', assignee: 'Sarah Johnson', dueDate: '2024-01-15' },
  { id: 2, title: 'Implement user authentication', status: 'in-progress', priority: 'high', assignee: 'Mike Chen', dueDate: '2024-01-20' },
  { id: 3, title: 'Write API documentation', status: 'pending', priority: 'medium', assignee: 'Emily Davis', dueDate: '2024-01-25' },
  { id: 4, title: 'Fix mobile responsive issues', status: 'completed', priority: 'medium', assignee: 'David Wilson', dueDate: '2024-01-18' },
  { id: 5, title: 'Optimize database queries', status: 'in-progress', priority: 'high', assignee: 'Mike Chen', dueDate: '2024-01-22' },
  { id: 6, title: 'Create user onboarding flow', status: 'pending', priority: 'low', assignee: 'Sarah Johnson', dueDate: '2024-01-30' },
  { id: 7, title: 'Update design system', status: 'completed', priority: 'medium', assignee: 'Emily Davis', dueDate: '2024-01-17' },
  { id: 8, title: 'Conduct security audit', status: 'pending', priority: 'high', assignee: 'David Wilson', dueDate: '2024-02-01' },
];

export const teamMembers = [
  { id: 1, name: 'Sarah Johnson', role: 'Frontend Developer', avatar: 'SJ', tasksCompleted: 24, efficiency: 92, status: 'online' },
  { id: 2, name: 'Mike Chen', role: 'Full Stack Developer', avatar: 'MC', tasksCompleted: 31, efficiency: 88, status: 'online' },
  { id: 3, name: 'Emily Davis', role: 'UI/UX Designer', avatar: 'ED', tasksCompleted: 18, efficiency: 95, status: 'away' },
  { id: 4, name: 'David Wilson', role: 'Backend Developer', avatar: 'DW', tasksCompleted: 27, efficiency: 85, status: 'online' },
  { id: 5, name: 'Jessica Martinez', role: 'Product Manager', avatar: 'JM', tasksCompleted: 15, efficiency: 90, status: 'offline' },
];

export const weeklyStats = [
  { day: 'Mon', tasks: 12, completed: 10 },
  { day: 'Tue', tasks: 15, completed: 14 },
  { day: 'Wed', tasks: 18, completed: 16 },
  { day: 'Thu', tasks: 14, completed: 13 },
  { day: 'Fri', tasks: 16, completed: 15 },
  { day: 'Sat', tasks: 8, completed: 7 },
  { day: 'Sun', tasks: 5, completed: 5 },
];

export const productivityData = [
  { month: 'Jan', productivity: 78, efficiency: 82 },
  { month: 'Feb', productivity: 85, efficiency: 88 },
  { month: 'Mar', productivity: 82, efficiency: 85 },
  { month: 'Apr', productivity: 90, efficiency: 92 },
  { month: 'May', productivity: 88, efficiency: 90 },
  { month: 'Jun', productivity: 92, efficiency: 95 },
];

export const recentActivity = [
  { id: 1, user: 'Sarah Johnson', action: 'completed task', target: 'Design new landing page', time: '2 hours ago' },
  { id: 2, user: 'Mike Chen', action: 'started working on', target: 'Implement user authentication', time: '3 hours ago' },
  { id: 3, user: 'Emily Davis', action: 'updated', target: 'Design system documentation', time: '5 hours ago' },
  { id: 4, user: 'David Wilson', action: 'completed task', target: 'Fix mobile responsive issues', time: '1 day ago' },
  { id: 5, user: 'Sarah Johnson', action: 'created task', target: 'Create user onboarding flow', time: '1 day ago' },
];

export const kpiData = {
  tasksDone: 65,
  tasksPending: 23,
  efficiency: 89,
  teamMembers: 5,
};

