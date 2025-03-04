import { FcOnlineSupport } from 'react-icons/fc';

const PatientFollowUp = () => {
  return (
    <div className="mt-10">
      <div className="container mx-auto max-w-lg">
        <div className="flex gap-2">
          <div className="mt-0.5">
            <FcOnlineSupport fontSize={28} />
          </div>
          <div className="mb-3">
            <h3 className="font-semibold text-2xl text-gray-800 mb-1">
              Your Recovery Matters to Us
            </h3>
            <p className="tracking-wide text-gray-600 max-w-lg">
              This is a quick check-in to ensure your recovery is
              going smoothly.
            </p>
          </div>
        </div>

        <form className="mt-2">
          <div className="max-w-xl">
            <div className="flex items-center ps-4 border border-gray-200 rounded-sm mb-3">
              <input
                id="good"
                type="radio"
                value="good"
                name="feedback"
                className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:outline-0"
              />
              <label
                htmlFor="good"
                className="w-full py-4 ms-2 text-sm font-medium text-green-700"
              >
                Everything is Good
              </label>
            </div>
            <div className="flex items-center ps-4 border border-gray-200 rounded-sm mb-4">
              <input
                id="concern"
                type="radio"
                value="concern"
                name="feedback"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:outline-0"
              />
              <label
                htmlFor="concern"
                className="w-full py-4 ms-2 text-sm font-medium text-red-500"
              >
                I have Concern
              </label>
            </div>

            <button
              type="submit"
              className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            >
              Send Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientFollowUp;
