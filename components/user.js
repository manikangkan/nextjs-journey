export default function index({ user }) {
  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </>
  );
}
