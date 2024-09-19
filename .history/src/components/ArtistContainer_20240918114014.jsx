import ArtistDetail from "./ArtistDetail"
export default function ArtistContainer(props) {

    const {artistNametest} =  props;
    const detailList = info.map(info => key={info} <ArtistDetail/>)

    return(
        <div>
            <img></img>
            <h2>{artistNametest}</h2>
            <ArtistDetail/>
        </div>
    );
}