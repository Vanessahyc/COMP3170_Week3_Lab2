import ArtistDetail from "./ArtistDetail"
export default function ArtistContainer(props) {

    const {artistNametest} =  props;
    const detailList = info.map(info => <ArtistDetail key={info} artistInfo={info.country} />)

    return(
        <div>
            <img></img>
            <h2>{artistNametest}</h2>
            {detailList}
        </div>
    );
}