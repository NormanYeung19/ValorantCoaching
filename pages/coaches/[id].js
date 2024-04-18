import { useRouter } from 'next/router';

function CoachProfile() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Profile of Coach {id}</div>;
}

export default CoachProfile;
