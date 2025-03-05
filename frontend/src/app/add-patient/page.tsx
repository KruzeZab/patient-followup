'use client';

import { redirect } from 'next/navigation';
import { useRef, useTransition } from 'react';

import { FcManager } from 'react-icons/fc';

import { toast } from 'react-toastify';

import { addPatient } from './actions';

import { HOME } from '@/constants/routes';

import Button from '@/app/components/button/Button';
import Heading from '@/app/components/heading/Heading';

export default function AddPatient() {
  const [isPending, startTransition] = useTransition();

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const response = await addPatient(formData);

      if (response.success) {
        toast.success(response.message);

        formRef.current?.reset();

        redirect(HOME);
      } else {
        toast.error(response.message);
      }
    });
  };

  return (
    <div>
      <div className="mt-10">
        <div className="container mx-auto max-w-lg">
          <Heading
            icon={<FcManager fontSize={28} />}
            title="Add Patient Form"
            description="Fill the form below to add a new patient."
          />

          <form action={handleSubmit} className="mt-2" ref={formRef}>
            <div className="max-w-xl">
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Patient Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Patient Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Patient's email address"
                  required
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Appointment For
                </label>
                <input
                  type="text"
                  name="appointment"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Vaccination"
                  required
                />
              </div>

              <Button
                type="submit"
                className="px-5 py-2.5 w-full justify-center"
                disabled={isPending}
              >
                {isPending ? 'Adding...' : 'Submit'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
