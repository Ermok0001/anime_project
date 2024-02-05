
export function AnimeCard(props){
    return(
            <div className="AnimeCard">
                <img src={props.data.images.jpg.image_url}></img>
                <h2>{props.data.title}</h2>
                <button>Watch</button>
                <a href={props.data.url}>Learn More</a>
            </div>
)
}