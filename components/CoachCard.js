// components/CoachCard.js
export default function CoachCard({ coach }) {
    // Use a fixed color for the example, or you can modify this to use a color based on the coach data
    return (
        <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{coach.name}</div>
          <p className="text-base">
            Specialty: {coach.specialty}
          </p>
          <p className="text-base">
            Hourly Rate: ${coach.hourly_rate}
          </p>
        </div>
      </div>
    );
  }
  