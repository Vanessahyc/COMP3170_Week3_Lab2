
export default function ArtistContainer(props) {

    const {artistNames} =  props;

    return(
        <div>
            <img></img>
            <h2>{artistNames}</h2>
            <ArtistDetail/>
        </div>
    );
}