import { FaBell } from 'react-icons/fa';

import { IFollowUp } from '@/interfaces/clinic';

import Alert from '@/app/components/alert/Alert';
import Heading from '@/app/components/heading/Heading';

interface NotificationProps {
  concerns: IFollowUp[];
}

const Notifications = (props: NotificationProps) => {
  const { concerns } = props;

  return (
    <div>
      <div className="mb-2">
        <Heading
          icon={
            <FaBell fontSize={22} className="mt-1" color="#e9155c" />
          }
          title="Notifications and Alerts"
          description="Track and view your alerts over here."
        />
      </div>

      <div className="inline-flex flex-col">
        {concerns.map((concern) => (
          <Alert key={concern.id} concern={concern} />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
