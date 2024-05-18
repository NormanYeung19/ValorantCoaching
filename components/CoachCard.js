// components/CoachCard.js
import Link from 'next/link';

const CoachCard = ({ coach }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md shadow-md mb-4">
      <h2 className="text-xl font-semibold">{coach.name}</h2>
      <p>Specialty: {coach.specialty}</p>
      <p>Hourly Rate: ${coach.hourly_rate}</p>
      <p>Game: {coach.game}</p>
      <Link href={`/coaches/${coach.id}`} legacyBehavior>
        <a className="text-blue-500 mt-2 inline-block">View Profile</a>
      </Link>
    </div>
  );
};

export default CoachCard;
