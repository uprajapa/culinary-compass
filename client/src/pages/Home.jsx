function Home({ users, message }) {
  return (
    <div className="m-8">
      {message ? (
        <p>{message}</p>
      ) : (
        <ul>
          {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
      )}
    </div>
  );
}

export default Home;
