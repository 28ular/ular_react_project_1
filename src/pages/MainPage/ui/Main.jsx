import {useNavigate} from "react-router-dom";

export const Main = ({ i , id}) => {

    const navigate = useNavigate();
    return (
        <>

        <div className="card" style={{border:"1px solid red"}}>
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