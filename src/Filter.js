import {useEffect} from "react";

function Filter({setActiveGenre, activeGenre, setFiltered, popular}) {
//  The API gives the Genre as a number value 0 = all 35 = Comedy.... 
// This useEffect checks if activeGenre is set to all. if yes, set the filter to popular array pulled on init
        useEffect(() => {
            if (activeGenre === 0){
                setFiltered(popular);
                return;
            }
            const filtered = popular.filter((movie) => movie.genre_ids.includes(activeGenre));

            setFiltered(filtered);
        }
        ,[activeGenre]);



    return(
        <div className="filter-container">
            <button
            className={activeGenre === 0 ? "active": ""}
            onClick={() => setActiveGenre(0)}>All</button>

            <button
            className={activeGenre === 35 ? "active": ""}
            onClick={() => setActiveGenre(35)}>Comedy</button>

            <button
            className={activeGenre === 28 ? "active": ""}
            onClick={() => setActiveGenre(28)}>Action</button>

            <button
            className={activeGenre === 10751 ? "active": ""}
            onClick={() => setActiveGenre(10751)}>Family</button>

            <button  className={activeGenre === 27 ? "active": ""}
            onClick={() => setActiveGenre(27)}>Horror</button>
        </div>
    )
}

export default Filter;