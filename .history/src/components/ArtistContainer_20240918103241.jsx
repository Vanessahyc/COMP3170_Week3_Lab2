
export default function ArtistContainer(props) {

    const {artist} =  props;

    return(
        <div>
            <img>{artist.photo_url}</img>
            <h2>{artist.name}</h2>
            <ArtistDetail/>
        </div>
    );
}