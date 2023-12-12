import Searchbar from '../../components/Searchbar/Searchbar';
import Carousel from '../../components/Carousel/Carousel';

// styles
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <Searchbar />
      <Carousel />
    </div>
  );
}

export default Home;
