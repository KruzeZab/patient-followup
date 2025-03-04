/**
 * Generate a follow up message
 *
 */
export function generateFollowUpMessage(
  patientName: string,
  typeOfCheckup: string
) {
  const subject = `Reminder: Follow-Up for Your ${typeOfCheckup}`;

  const body = `
    Hi ${patientName},

    We hope you're doing well! This is a gentle reminder for your follow-up regarding your ${typeOfCheckup}. 

    Please take a moment to update your status by clicking the link below:

    [Update Follow-Up Status](#)  

    Stay healthy,  
    Your Clinic Team
  `;

  return { subject, body };
}
