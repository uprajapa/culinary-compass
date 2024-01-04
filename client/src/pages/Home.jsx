function Home({ users, message }) {
  return (
    <div className="m-8">
      <h1>Recipes Carousel</h1>
      <h2>list two recipes</h2>
      {/* {message ? (
        <p>{message}</p>
      ) : (
        <ul>
          {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
      )} */}
    </div>
  );
}

export default Home;
