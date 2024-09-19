import { artists } from "../best-selling-music-artists";
import ArtistDetail from "./ArtistDetail"

export default function ArtistContainer(props) {

    const {artistProfile} =  props;

    return(
        <div>
            <img>{artistProfile.photo_url}</img>
            <h2>{artistProfile.name}</h2>
            <ArtistDetail/>
        </div>
    );
}