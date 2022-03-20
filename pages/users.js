import User from "../components/user";
export default function index({ users }) {
  return (
    <>
      <div>List of users</div>
      {users.map((user) => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}
