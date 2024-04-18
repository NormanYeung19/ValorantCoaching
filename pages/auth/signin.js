// pages/auth/signin.js
function SignIn() {
    return (
      <div>
        <h1>Sign In</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
  
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
  
          <button type="submit">Sign In</button>
        </form>
        {/* Add more sign-in logic and form handling here */}
      </div>
    );
  }
  
  export default SignIn;
  