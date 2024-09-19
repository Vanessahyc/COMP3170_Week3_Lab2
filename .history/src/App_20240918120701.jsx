import { artists } from './best-selling-music-artists';
import ArtistInfo from './components/ArtistInfo';

function App() {

  const artistList = artists.map(artist => <ArtistInfo artistName={artist.name}/>)

  return (
    <div className="app">
      <h1>Best-selling music artists</h1>
      {artistList}
    </div>
  );
}

export default App;
