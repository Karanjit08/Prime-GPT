import { useEffect } from "react";
import { options } from "../utils/Utility";
import { useSelector } from "react-redux";



var HomeBody = () => {


    var getPopularMovieLists = async() => {

        var data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',options);
        var popularMovieLists = await data.json();
        console.log(popularMovieLists);
        console.log(popularMovieLists.results);
    }

    var userLoginDataMap = useSelector((store) => store.user);
    var userData = Object.entries(userLoginDataMap); // Converting map to array


    useEffect(() => {
        getPopularMovieLists();
    })

    return (
        <div>
            <h2>User Data</h2>
            <ul>
                {userData.map(([key, value]) => (
                    <li key={key}>
                        <b>{key} {value}</b>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomeBody;