import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const Details = () => {

    const navigate = useNavigate();

    const {id} = useParams();

    const [data , setData] = useState(null);



    useEffect(() => {
        const d = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const data = await res.json();
            setData(data);
        }

        d()
    }, [id])


    return (
        <>
            {
                !data ?  (
                    <p>loading....</p>
                ):
                <div className="detal">
                    <h2>{data.name}</h2>
                    <h3>{data.username}</h3>
                    <p>{data.email}</p>
                    <button onClick={() => navigate(-1)}>back</button>
                </div>
            }
        </>
    )
}
