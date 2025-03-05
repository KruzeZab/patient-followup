import { FcOnlineSupport } from 'react-icons/fc';

import Heading from '@/app/components/heading/Heading';

import FollowUpForm from './FollowUpForm';

const PatientFollowUp = async ({
  params,
}: {
  params: { followUpToken: string };
}) => {
  const token = params.followUpToken;

  return (
    <div className="mt-10">
      <div className="container mx-auto max-w-lg">
        <Heading
          icon={<FcOnlineSupport fontSize={28} />}
          title="Your Recovery Matters to Us"
          description="This is a quick check-in to ensure your recovery is going smoothly."
        />
        <FollowUpForm token={token} />
      </div>
    </div>
  );
};

export default PatientFollowUp;
