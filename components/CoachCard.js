// components/CoachCard.js
export default function CoachCard({ coach }) {
    // Use a fixed color for the example, or you can modify this to use a color based on the coach data
    return (
      <div className="bg-black text-white rounded-lg shadow-md p-5">
        <h3 className="text-lg">{coach.full_name}</h3>
        <p>Specialty: {coach.specialty}</p>
        <p>Hourly Rate: ${coach.hourly_rate}</p>
      </div>
    );
  }
  