export default function ArtistInfo(props) {

    const {artistInfo} =  props;
    // const detailList = artists.map(info => <ArtistDetail key={info} artistInfo={info.country} />)

    return(
        <div>
            <img>{artistInfo}</img>
            <h2>{artistInfo}</h2>
            {/* {detailList} */}
        </div>
    );
}