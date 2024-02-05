export function Search(props){
    return(
        <div className="Search">
            <input value={props.searchAnime} onChange={(e)=>{props.setSearchAnime(e.target.value)}} placeholder="Search Anime"></input>
            <button onClick={props.handleSearch}>Search</button>
        </div>
    )
}