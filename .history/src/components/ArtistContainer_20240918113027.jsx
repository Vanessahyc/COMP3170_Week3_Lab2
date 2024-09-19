
export default function ArtistContainer(props) {

    const {artistName} =  props;

    return(
        <div>
            <img></img>
            <h2>{artistName}</h2>
            <ArtistDetail/>
        </div>
    );
}