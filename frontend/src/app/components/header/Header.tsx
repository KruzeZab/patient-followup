import Link from 'next/link';

import { FcMindMap } from 'react-icons/fc';
import { IoAddCircleSharp } from 'react-icons/io5';

const Header = () => {
  return (
    <div className="shadow">
      <div className="container mx-auto">
        <div className="flex items-center py-3 justify-between">
          <Link href="/">
            <h1 className="flex items-center gap-2 text-3xl">
              <div>
                <FcMindMap />
              </div>
              <div>Veterinary Clinic</div>
            </h1>
          </Link>
          <div>
            <Link
              href="/add-patient"
              className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center gap-1"
            >
              <IoAddCircleSharp fontSize={18} />
              <div className="mt-0.5">Add Patient</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
