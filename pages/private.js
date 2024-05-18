import withAuth from '../utils/withAuth';

function PrivatePage({ user }) {
  return (
    <div>
      <h1>Private Page</h1>
      <p>Welcome, {user.email}</p>
    </div>
  );
}

export default withAuth(PrivatePage);
