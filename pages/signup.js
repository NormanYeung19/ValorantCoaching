// pages/auth/signup.js
function SignUp() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
  
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
  
          <button type="submit">Sign Up</button>
        </form>
        {/* Add more sign-up logic and form handling here */}
      </div>
    );
  }
  
  export default SignUp;
  