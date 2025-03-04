import FollowUp from './components/followup/FollowUp';
import Notification from './components/notification/Notification';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="pt-8">
        <div className="container mx-auto">
          <FollowUp />
          <div className="mt-8">
            <Notification />
          </div>
        </div>
      </main>
    </div>
  );
}
