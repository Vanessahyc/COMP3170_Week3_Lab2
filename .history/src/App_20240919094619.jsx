import { artists } from './best-selling-music-artists';
import ArtistInfo from './components/ArtistInfo';
import Layout from './components/Layout';


function App() {

  const artistList = artists.map(artistInfo => <ArtistInfo key={artistInfo.name} artistInfo={artistInfo}/>)

  return (
    <div className="app">
      <h1>Best-selling music artists</h1>
      <Layout>
        {artistList}
      </Layout>
    </div>
  );
}

export default App;
