import {Outlet} from "react-router-dom";
import {Header} from "./Header.jsx";
import "./router.css"

export const Layout = () => {
    return (
        <>
            <Header/>
            <div className="main">
                <Outlet/>
            </div>
            <div className="footer"><a href="https://t.me/uu_mrts">made b Ular</a></div>
        </>
    );
}