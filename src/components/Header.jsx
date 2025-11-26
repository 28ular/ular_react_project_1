import {useNavigate} from "react-router-dom";
import {useTheme} from "../store/theme.js";
import '../header.css'
import {useAvatar} from "../store/avatar.js";
export const Header = () => {
    const navigate  = useNavigate();
    const {theme , toggle} = useTheme()
    document.body.style.background = theme

    const {AvatarUrl} = useAvatar()

    return (
        <>
            <div className="header" style={{
                width:'100%',
            }}>

                <ul className="list">
                    <li onClick={() => navigate('/main')}>Main</li>
                    <li onClick={() => navigate('/about')}>About</li>
                    <li onClick={() => navigate('/shop')}>Shop</li>
                    <li>
                        <button onClick={() => toggle() }>{theme ==='black' ? '🌙dark' : '☀️ light'}</button>

                    </li>
                    <li className="avat" onClick={() => navigate('/avatar')}  style={{backgroundImage: `url(${AvatarUrl.url} )` , }}>
                    </li>
                </ul>
            </div>


        </>
    )
}