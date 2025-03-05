'use server';

import { revalidatePath } from 'next/cache';

import config from '@/config';

import { buildUrl } from '@/utils/url';

import { HOME } from '@/constants/routes';

export async function addPatient(formData: FormData) {
  const name = formData.get('name')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const typeOfCheckup = formData
    .get('appointment')
    ?.toString()
    .trim();

  if (!name || !email || !typeOfCheckup) {
    return { success: false, message: 'All fields are required!' };
  }

  try {
    const response = await fetch(
      buildUrl(config.baseUrl, config.endpoints.patients),
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, typeOfCheckup }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || 'Something went wrong!',
      };
    }

    revalidatePath(HOME);

    return { success: true, message: result.message };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: 'Server error. Please try again!',
    };
  }
}
