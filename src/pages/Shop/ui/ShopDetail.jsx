import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Button} from "antd";

export const ShopDetail = () => {
    const {id} = useParams()
    const [data , setData] = useState()
    const navigate = useNavigate();


    useEffect(() => {
        const getAllData = async () => {
            const res = await axios.get('http://localhost:5000/Shop/db/shop.json')
        }
    }, []);

    return (
        <>
                <h1 style={{fontSize: '100px' , marginBottom: '50px'}}>В процессе...</h1>
                <Button type={'primary'} style={{ padding: '100px' , borderRadius: '40%' }} onClick={() => navigate(-1)}>back</Button>
        </>
    )
}
