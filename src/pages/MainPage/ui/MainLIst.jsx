import {useEffect, useState} from "react";
import {useMain} from "../api/MainApi.js";
import {Main} from "./Main.jsx";

export const MainLIst = () => {

    const {users , loading, error, getUsers} = useMain();



    useEffect(() => {
        getUsers()
    },[])

    console.log(users)
    if (loading) return <p>LOADING......</p>
    return(
        <ul>
            {users.map((user) => <Main key={user.id} i={user} id={user.id} />)}
        </ul>
    )
}