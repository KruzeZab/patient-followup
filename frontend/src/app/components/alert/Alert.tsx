import { IFollowUp } from '@/interfaces/clinic';
import { formatDate } from '@/utils/date';

interface AlertProps {
  concern: IFollowUp;
}

const Alert = (props: AlertProps) => {
  const { concern } = props;

  return (
    <div
      key={concern.id}
      className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 ml-6"
      role="alert"
    >
      <span className="sr-only">Info</span>
      <div>
        {concern.name} for {concern.typeOfCheckup} checkup whose
        follow-up was on{' '}
        <span className="font-medium">
          {formatDate(concern.followUpTime)}
        </span>{' '}
        raised a <span className="font-medium">concern</span>.
      </div>
    </div>
  );
};

export default Alert;
