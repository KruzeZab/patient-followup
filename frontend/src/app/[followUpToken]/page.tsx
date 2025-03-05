import { FcOnlineSupport } from 'react-icons/fc';
import Heading from '../components/heading/Heading';
import config from '@/config';
import FollowUpForm from './FollowUpForm';

const PatientFollowUp = async () => {
  const response = await fetch(
    `${config.baseUrl}${config.endpoints.followUp}/195605b8784-3af099a9`
  );

  const {
    data: { token },
  } = await response.json();

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
