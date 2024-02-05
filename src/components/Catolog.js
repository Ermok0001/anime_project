import { AnimeCard } from "../AnimeCard/AnimeCard";

export function Catolog(props){
    return <div className="Catalog">
        {props.array.map((animeData)=>{
            return <AnimeCard data={animeData}/>
        })}
        </div>
}