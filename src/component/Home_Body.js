import { useEffect } from "react";
import { options } from "../utils/Utility";



var HomeBody = () => {


    var getPopularMovieLists = async() => {

        var data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',options);
        var popularMovieLists = await data.json();
        console.log(popularMovieLists);
        console.log(popularMovieLists.results);
    }


    useEffect(() => {
        getPopularMovieLists();
    })

    return (
        <div>
        </div>
    );
}

export default HomeBody;