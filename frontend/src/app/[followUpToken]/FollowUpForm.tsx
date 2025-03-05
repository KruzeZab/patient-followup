'use client';

import { useRef, useState } from 'react';

import { toast } from 'react-toastify';

import { updateFollowUp } from './actions';

import { HealthStatus } from '@/interfaces/clinic';

import { HOME } from '@/constants/routes';

import Button from '@/app/components/button/Button';
import { useRouter } from 'next/navigation';

interface FollowUpFormProps {
  token: string;
}

const FollowUpForm = (props: FollowUpFormProps) => {
  const { token } = props;

  const [loading, setLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);

    const status = formData.get('feedback');

    if (!status) {
      toast.error('Please select an option.');
      setLoading(false);
      return;
    }

    try {
      const result = await updateFollowUp(
        token,
        status as HealthStatus
      );

      if (result.success) {
        toast.success(result.message);

        formRef.current?.reset();

        router.push(HOME);
      } else {
        toast.error(result.message || 'Something went wrong!');
      }
    } catch (error) {
      console.log(error);

      toast.error('Failed to submit feedback.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} action={handleSubmit} className="mt-2">
      <div className="max-w-xl">
        <div className="flex items-center ps-4 border border-gray-200 rounded-sm mb-3">
          <input
            id="healthy"
            type="radio"
            value="healthy"
            name="feedback"
            className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:outline-0"
          />
          <label
            htmlFor="healthy"
            className="w-full py-4 ms-2 text-sm font-medium text-green-700 hover:cursor-pointer"
          >
            Everything is Good
          </label>
        </div>
        <div className="cursor-pointer flex items-center ps-4 border border-gray-200 rounded-sm mb-4">
          <input
            id="concern"
            type="radio"
            value="concern"
            name="feedback"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:outline-0"
          />
          <label
            htmlFor="concern"
            className="w-full py-4 ms-2 text-sm font-medium text-red-500 hover:cursor-pointer"
          >
            I have a Concern
          </label>
        </div>

        <Button
          className="justify-center px-5 py-2.5 w-full"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Send Feedback'}
        </Button>
      </div>
    </form>
  );
};

export default FollowUpForm;
