import Link from 'next/link';
import { FcMindMap } from 'react-icons/fc';
import { IoAddCircleSharp } from 'react-icons/io5';

import { ADD_PATIENT, HOME } from '@/constants/routes';

import Button from '@/app/components/button/Button';

const Header = () => {
  return (
    <div className="shadow px-2 xl:px-0">
      <div className="container mx-auto">
        <div className="flex items-center py-3 justify-between">
          <Link href={HOME}>
            <h1 className="flex items-center gap-2 text-3xl">
              <div>
                <FcMindMap />
              </div>
              <div>Veterinary Clinic</div>
            </h1>
          </Link>
          <div>
            <Button href={ADD_PATIENT} className="px-5 py-2.5">
              <IoAddCircleSharp fontSize={18} />
              <div className="mt-0.5">Add Patient</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
