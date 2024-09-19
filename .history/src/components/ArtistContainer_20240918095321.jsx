import { artists } from "../best-selling-music-artists";
import ArtistDetail from "./ArtistDetail"

export default function ArtistContainer(props) {

    const {artistProfile} =  artists;

    return(
        <div>
            <img>{artistProfile.photo_url}</img>
            <h2>{artistProfile}</h2>
            <ArtistDetail/>
        </div>
    );
}