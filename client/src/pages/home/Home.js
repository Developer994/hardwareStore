import Searchbar from '../../components/Searchbar/Searchbar';

// styles
import './Home.css';
import HomePageContent from '../../components/HomePageContent/HomePageContent';

function Home() {
  return (
    <div className='home'>
      <Searchbar />
      <HomePageContent />
    </div>
  );
}

export default Home;
