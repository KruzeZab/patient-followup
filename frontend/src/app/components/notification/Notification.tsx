import { FaBell } from 'react-icons/fa';

const Notification = () => {
  return (
    <div>
      <div className="flex gap-2 mb-4">
        <FaBell fontSize={22} className="mt-1" color="#e9155c" />
        <div>
          <h3 className="font-semibold text-2xl text-gray-800 mb-1">
            Notifications
          </h3>
          <p className="tracking-wide text-gray-600 max-w-lg">
            Track and view your alerts over here.
          </p>
        </div>
      </div>

      <div
        className="inline-flex items-center p-4 mb-4 min-w-lg text-sm text-red-800 rounded-lg bg-red-50 ml-6"
        role="alert"
      >
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">Patient Name </span>
          for <span className="font-medium">Checkup Type </span>
          has raised a <span className="font-medium">Concern</span>.
          Please look into it.
        </div>
      </div>
    </div>
  );
};

export default Notification;
