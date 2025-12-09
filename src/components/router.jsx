import {createBrowserRouter} from "react-router-dom";
import {MainLIst} from "../pages/MainPage/ui/MainLIst.jsx";
import {Layout} from "./Layout.jsx";
import {Greet} from "../pages/greet/Greet.jsx";
import {Details} from "../pages/Details/ui/Detail.jsx";
import {About} from "../pages/About/ui/About.jsx";
import {ShopList} from "../pages/Shop/ui/ShopList.jsx";
import {Avatar} from "../pages/Avatar/ui/Avatar.jsx";
import {ShopDetail} from "../pages/Shop/ui/ShopDetail.jsx";
import {NotFound} from "./NotFound.jsx";

export const router  = createBrowserRouter([{
    element: <Layout/>,
    path: "/",
    children: [
        {index: true, element: <Greet/>},
        {path:'main' , element: <MainLIst/>},
        {path:'main/:id' , element: <Details/>},
        {path:'about' , element: <About/>},
        {path:'shop' , element: <ShopList/>},
        {path:'shop/:id' , element: <ShopDetail/>},
        {path:"*" , element: <NotFound/> },
        {path: 'avatar' , element: <Avatar/>},
    ]
}])
