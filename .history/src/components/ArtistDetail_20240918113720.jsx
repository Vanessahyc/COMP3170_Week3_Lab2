import ArtistDetail from "./ArtistDetail"
export default function ArtistContainer(props) {

    const {artistInfo} = props

    return(
        <div>
            {/* <p>{artistInfo.country}</p> */}
            <p>{artistInfo.years_active}</p>
        </div>
    );
}