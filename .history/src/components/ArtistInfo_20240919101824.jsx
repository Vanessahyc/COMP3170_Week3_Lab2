import Layout from "./Layout";

export default function ArtistInfo(props) {

    const {artistInfo} =  props;
    // const detailList = artists.map(info => <ArtistDetail key={info} artistInfo={info.country} />)

    return(
        <Layout className="artistCard">
            <div className="artistImage">
                <img src={artistInfo.photo_url} alt=""/>
            </div>
            <div className="artistInfo">
                <h2>{artistInfo.name}</h2>
                <p>
                    <span>{artistInfo.country}</span>
                    <br>
                    <span>{artistInfo.years_active}</span>
                </p>
            </div>
        </Layout>
    );
}