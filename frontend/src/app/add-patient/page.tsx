import { FcManager } from 'react-icons/fc';

const AddPatient = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="container mx-auto max-w-lg">
          <div className="flex gap-2">
            <div>
              <FcManager fontSize={28} />
            </div>
            <div className="mb-3">
              <h3 className="font-semibold text-2xl text-gray-800 mb-1">
                Add Patient Form
              </h3>
              <p className="tracking-wide text-gray-600 max-w-lg">
                Fill the form below to add a new patient.
              </p>
            </div>
          </div>
          <form className="mt-2">
            <div className="max-w-xl">
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Patient Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  autoFocus
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Patient Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  autoFocus
                  required
                  placeholder="Patient's email address"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="appointment"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Appointment For
                </label>
                <input
                  type="text"
                  id="appointment"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  autoFocus
                  placeholder="Vaccination"
                  required
                />
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPatient;
