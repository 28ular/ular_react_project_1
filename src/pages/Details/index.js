// import {useParams} from "react-router-dom";
// import {useEffect, useReducer, useState} from "react";
//
// export const Details = () => {
//     const {id} = useParams()
//     const [data , setData] = useState(null);
//
//     useEffect(() => {
//         const d = async () => {
//             const res = await fetch( `https://jsonplaceholder.typicode.com/:${id}`)
//             const data = res.json()
//             setData(data);
//
//
//             d()
//         }
//     },[id])
//
//     return (
//         <>
//             <ul>
//                 {
//                     data.map(item => {
//                         return (
//                             <li>{item.name}</li>
//                         )
//                     })
//                 }
//             </ul>
//         </>
//     )
// }