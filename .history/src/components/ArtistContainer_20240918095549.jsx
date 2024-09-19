import { artists } from "../best-selling-music-artists";
import ArtistDetail from "./ArtistDetail"

export default function ArtistContainer(props) {

    // const {artistProfile} =  artists;

    return(
        <div>
            <img>{artists.photo_url}</img>
            <h2>{artists}</h2>
            <ArtistDetail/>
        </div>
    );
}