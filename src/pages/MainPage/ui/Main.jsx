import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Main = ({ i , id}) => {
    useEffect(() => {
        AOS.init({duration: 800})
    }, []);

    const navigate = useNavigate();
    return (
        <>
        <div data-aos="fade-left"
             data-aos-offset="100"
             data-aos-easing="ease-in-sine"
             className="card" style={{border:"1px solid red"}}>
            <div className="card_container">
                <div className="card_container">
                    <div className="title">{`name:${i.name}`}</div>
                    <span>{`username: ${i.username}`}</span>
                    <button onClick={() => navigate(`/main/${id}`)}>details</button>
                </div>
            </div>
        </div>

        </>
    )
}