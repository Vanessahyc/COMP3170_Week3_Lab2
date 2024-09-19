import { artists } from './best-selling-music-artists';
import ArtistContainer from './components/ArtistContainer';

function App() {

  const artistList = artists.map(artistContainer => <ArtistContainer key={artists.name} artistyearactives={artists.} artistContainer={artistContainer}/>)

  return (
    <div className="app">
      <h1>Best-selling music artists</h1>
      {artistList}
    </div>
  );
}

export default App;