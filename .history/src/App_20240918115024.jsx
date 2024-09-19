import { artists } from './best-selling-music-artists';
import ArtistContainer from './components/ArtistContainer';
import ArtistDetail from './components/ArtistDetail'

function App() {

  const artistList = artists.map(artist => {
    <ArtistContainer key={artist.name} artistName={artist.name}/>
    <ArtistDetail key={info} artistInfo={info.country} />
  })


  return (
    <div className="app">
      <h1>Best-selling music artists</h1>
      {artistList}
    </div>
  );
}

export default App;
