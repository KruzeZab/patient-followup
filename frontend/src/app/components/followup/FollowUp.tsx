import React from 'react';
import classNames from 'classnames';
import { FcWorkflow } from 'react-icons/fc';

import { IFollowUp } from '@/interfaces/clinic';

import {
  capitalizeFirstLetter,
  getStatusColor,
} from '@/utils/string';
import { formatDate } from '@/utils/date';

import Heading from '@/app/components/heading/Heading';

interface FollowUpProps {
  followUps: IFollowUp[];
}

const FollowUp = (props: FollowUpProps) => {
  const { followUps } = props;

  return (
    <>
      <div className="mb-2">
        <Heading
          icon={<FcWorkflow fontSize={28} />}
          title="Follow Ups Overview"
          description="Track and manage patient follow-ups effortlessly."
        />
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
                Follow up
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
            {followUps.map((followUp) => (
              <tr
                key={followUp.id}
                className="bg-white border-b border-gray-200"
              >
                <th
                  scope="row"
                  className="px-6 py-3 whitespace-nowrap"
                >
                  {followUp.name}
                </th>
                <td className="px-6 py-3">{followUp.email}</td>
                <td className="px-6 py-3">
                  {formatDate(followUp.followUpTime)}
                </td>
                <td className="px-6 py-3">
                  {capitalizeFirstLetter(followUp.typeOfCheckup)}
                </td>
                <td
                  className={classNames(
                    'px-6 py-3 font-medium rounded',
                    getStatusColor(followUp.status)
                  )}
                >
                  {followUp.status.toUpperCase()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FollowUp;
