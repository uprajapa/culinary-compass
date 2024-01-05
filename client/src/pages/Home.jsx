import Carousel from 'react-bootstrap/Carousel';

function Home({ users, message }) {
  return (
    <div className="m-8">
      <Carousel>
      <Carousel.Item>
        <img src="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src=""/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src=""/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
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
