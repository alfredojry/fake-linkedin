import CardUser from './CardUser';
import PostsContainer from './PostsContainer';
import StatsUser from './StatsUser';
import '../styles/App.css';
import data from '../informations.json';

function App() {
  return (
    <div className="App">
      <CardUser user={data.user} />
      <PostsContainer posts={data.posts} />
      <StatsUser />
    </div>
  );
}

export default App;
