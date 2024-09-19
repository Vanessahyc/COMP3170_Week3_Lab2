import { artists } from './best-selling-music-artists';
import ArtistContainer from './components/ArtistContainer';

function App() {

  const artistList = artistList.map(artistContainer => <ArtistContainer key={artists} artistContainer={artistContainer}/>)

  return (
    <div className="app">
      <h1>Best-selling music artists</h1>
      {artistList}
    </div>
  );
}

export default App;
