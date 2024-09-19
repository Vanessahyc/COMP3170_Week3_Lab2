import ArtistDetail from "./ArtistDetail"
import { artists } from '../best-selling-music-artists';
export default function ArtistContainer(props) {

    const {artistNametest} =  props;
    // const detailList = artists.map(info => <ArtistDetail key={info} artistInfo={info.country} />)

    return(
        <div>
            <img></img>
            <h2>{artistNametest}</h2>
            {detailList}
        </div>
    );
}