import ArtistDetail from "./ArtistDetail"
export default function ArtistContainer(props) {

    const {artistNametest} =  props;
    const detailList

    return(
        <div>
            <img></img>
            <h2>{artistNametest}</h2>
            <ArtistDetail/>
        </div>
    );
}