import { HealthStatus } from '@/interfaces/clinic';

/**
 * Get the status color based on status
 *
 */
export const getStatusColor = (status: HealthStatus) => {
  const statusColors: Record<typeof status, string> = {
    pending: 'text-yellow-500 bg-yellow-100',
    healthy: 'text-green-500 bg-green-100',
    concern: 'text-red-500 bg-red-100',
  };

  return statusColors[status] || 'text-gray-500 bg-gray-100';
};

/**
 * Capitalize first letter
 *
 */
export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
