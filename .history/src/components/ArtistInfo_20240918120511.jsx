export default function ArtistInfo(props) {

    const {artistName} =  props;
    // const detailList = artists.map(info => <ArtistDetail key={info} artistInfo={info.country} />)

    return(
        <div>
            <img>{artistName}</img>
            <h2>{artistName}</h2>
            {/* {detailList} */}
        </div>
    );
}