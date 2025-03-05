import FollowUp from '@/app/components/followup/FollowUp';
import {
  FollowUpResponse,
  HealthStatus,
  IFollowUp,
} from '@/interfaces/clinic';
import Notifications from '@/app/components/notification/Notification';
import config from '@/config';

export default async function Home() {
  const response = await fetch(
    `${config.baseUrl}${config.endpoints.followUps}`,
    {
      method: 'GET',
    }
  );

  const { data }: FollowUpResponse = await response.json();

  const followUps: IFollowUp[] = data;

  const concernFollowUps = followUps.filter(
    (followUp) => followUp.status === HealthStatus.CONCERN
  );

  return (
    <div className="min-h-screen">
      <main className="px-2 xl:px-0 py-8">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse xl:flex-row gap-2">
            {/* Left Column (8/12 on medium screens) */}
            <div className="xl:w-2/3 w-full">
              <FollowUp followUps={followUps} />
            </div>

            {/* Right Column (4/12 on medium screens, moves to bottom on small screens) */}
            <div className="xl:w-1/3 w-full mt-2">
              <Notifications concerns={concernFollowUps} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
