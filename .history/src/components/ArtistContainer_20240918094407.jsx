import { artists } from "../best-selling-music-artists";
import ArtistDetail from "./ArtistDetail"

export default function ArtistContainer(props) {

    const productList = artists.map(product => <Product key={product.name} product={product}/>)

    return(
        <div>
            <img></img>
            <h2>{}</h2>
            <ArtistDetail/>
        </div>
    );
}