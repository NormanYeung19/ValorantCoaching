// pages/bookings/new.js
function NewBooking() {
    return (
      <div>
        <h1>Create a New Booking</h1>
        <form>
          <label htmlFor="coach">Select Coach:</label>
          <select id="coach" name="coach">
            {/* Map over your coaches here to create select options */}
            <option value="coach1">Coach 1</option>
            <option value="coach2">Coach 2</option>
          </select>
  
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required />
  
          <button type="submit">Book Session</button>
        </form>
        {/* Add more booking logic and form handling here */}
      </div>
    );
  }
  
  export default NewBooking;
  