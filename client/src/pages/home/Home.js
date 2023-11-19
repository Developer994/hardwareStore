import Searchbar from '../../components/Searchbar';
import Navbar from '../../components/Navbar/Navbar';

// styles
import './Home.css';

function Home() {
  return (
    <div className='container'>
      Search for tools
      <Searchbar />
    </div>
  );
}

export default Home;
