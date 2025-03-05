'use server';

import config from '@/config';
import { HealthStatus } from '@/interfaces/clinic';

export const updateFollowUp = async (
  token: string,
  status: HealthStatus
) => {
  const formBody = {
    status,
    followUpId: token,
  };

  try {
    const response = await fetch(
      `${config.baseUrl}${config.endpoints.followUps}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formBody),
      }
    );

    const data = await response.json();

    if (response.ok) {
      return { success: true, message: data.message };
    } else {
      return {
        success: false,
        message: data.message || 'Something went wrong!',
      };
    }
  } catch (error) {
    console.log(error);

    return { success: false, message: 'Failed to submit feedback.' };
  }
};
