import ArtistDetail from "./ArtistDetail"
export default function ArtistContainer(props) {

    const {artistNametest} =  props;

    return(
        <div>
            <img></img>
            <h2>{artistNametest}</h2>
            <ArtistDetail/>
        </div>
    );
}