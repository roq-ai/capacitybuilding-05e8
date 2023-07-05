const mapping: Record<string, string> = {
  organizations: 'organization',
  trainings: 'training',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
