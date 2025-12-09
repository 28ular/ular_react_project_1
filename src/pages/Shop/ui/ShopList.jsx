import dataShop from '../db/shop.json'
import {Shop} from "./Shop.jsx";


export const ShopList = () => {

    return (
        <>

            <div className="shopList">{
                dataShop.products.map((s) => <Shop s={s} key={s.id}/>)
            }</div>
        </>
    );
}