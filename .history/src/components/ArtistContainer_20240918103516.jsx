
export default function ArtistContainer(props) {

    const {artistNamess} =  props;

    return(
        <div>
            <img>{artist.photo_url}</img>
            <h2>{artistNames}</h2>
            <ArtistDetail/>
        </div>
    );
}