/**
 * Generate a follow up message
 *
 */
export function generateFollowUpMessage(
  patientName: string,
  typeOfCheckup: string,
  token: string
) {
  const subject = `Reminder: Follow-Up for Your ${typeOfCheckup}`;

  const body = `
    Hi ${patientName},

    We hope you're doing well! This is a gentle reminder for your follow-up regarding your ${typeOfCheckup}. 

    Please take a moment to update your status by clicking the link below:

    http://localhost:3000/${token}

    Stay healthy,  
    Your Clinic Team
  `;

  return { subject, body };
}
