import Searchbar from '../../components/Searchbar/Searchbar';

// styles
import './Home.css';
import PageContent from '../../components/PageContent/PageContent';

function Home() {
  return (
    <div className='home'>
      <Searchbar />
      <PageContent />
    </div>
  );
}

export default Home;
