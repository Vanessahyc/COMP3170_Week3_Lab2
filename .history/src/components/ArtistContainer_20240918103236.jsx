
export default function ArtistContainer(props) {

    const {artist} =  props;

    return(
        <div>
            <img>{artists.photo_url}</img>
            <h2>{artists.name}</h2>
            <ArtistDetail/>
        </div>
    );
}