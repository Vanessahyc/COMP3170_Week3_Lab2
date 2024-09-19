import ArtistDetail from "./ArtistDetail"
export default function ArtistContainer(props) {

    const {artist} =  props;

    return(
        <div>
            <img></img>
            <h2>{artist}</h2>
            <ArtistDetail/>
        </div>
    );
}