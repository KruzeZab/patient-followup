import React from 'react';

import { FcWorkflow } from 'react-icons/fc';

const FollowUp = () => {
  return (
    <>
      <div className="flex gap-2">
        <div>
          <FcWorkflow fontSize={28} />
        </div>
        <div className="mb-3">
          <h3 className="font-semibold text-2xl text-gray-800 mb-1">
            Follow Ups Overview
          </h3>
          <p className="tracking-wide text-gray-600 max-w-lg">
            Track and manage patient follow-ups effortlessly.
          </p>
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 border border-gray-200">
          <thead className="text-xs uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Patient Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Checkup Type
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-gray-200">
              <th scope="row" className="px-6 py-3 whitespace-nowrap">
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-3">Silver</td>
              <td className="px-6 py-3">Laptop</td>
              <td className="px-6 py-3">$2999</td>
            </tr>
            <tr className="bg-white border-b border-gray-200">
              <th scope="row" className="px-6 py-3 whitespace-nowrap">
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-3">White</td>
              <td className="px-6 py-3">Laptop PC</td>
              <td className="px-6 py-3">$1999</td>
            </tr>
            <tr className="bg-white ">
              <th scope="row" className="px-6 py-3 whitespace-nowrap">
                Magic Mouse 2
              </th>
              <td className="px-6 py-3">Black</td>
              <td className="px-6 py-3">Accessories</td>
              <td className="px-6 py-3">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FollowUp;
