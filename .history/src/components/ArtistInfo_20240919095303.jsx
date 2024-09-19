import Layout from "./Layout";

export default function ArtistInfo(props) {

    const {artistInfo} =  props;
    // const detailList = artists.map(info => <ArtistDetail key={info} artistInfo={info.country} />)

    return(
        <Layout>
            <img src={artistInfo.photo_url} alt=""/>
            <h2>{artistInfo.name}</h2>
            <p>{artistInfo.country}</p>
            <p>{artistInfo.years_active}</p>
        </Layout>
    );
}