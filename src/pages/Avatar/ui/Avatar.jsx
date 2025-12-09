import {useAvatar} from "../../../store/avatar.js";
import './avatar.css'
import {useEffect, useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from 'aos';
import "aos/dist/aos.css";

export const Avatar = () => {

    const {Name , Age , Telegram , setUser , custom , toggleForm , AvatarUrl , changeAvatarurl  , avatarClass , toggleAvatarForm} = useAvatar()

    useEffect(()=>{
        AOS.init({duration: 800})
    }, [])


    const [name , setName] = useState("")
    const [age , setAge] = useState("")
    const [telegram , setTelegram] = useState("")
    const [avatar , setAvatar] = useState("")

    const notifySAvatar = () => toast.success(" Avatar Updated" , {autoClose:2000})
    const errorSAvatar = () => toast.error("ошибка:  заполните поле !" , {autoClose:1500})




    const changeAvatar = () => {
        if (!avatar) {
            errorSAvatar()
            return
        }
        changeAvatarurl(avatar)
        setAvatar('')
        notifySAvatar()
    }


    const hover = () => {

    }

    // const notify = () => toast.success("successfully!" , {autoClose: 1500})
    const notify = () => toast.success("successfully!" , {autoClose: 1500})

    const ernotify = () => toast.error("Erreur de la connexion" , {autoClose: 1900})

    const HandleClick = () => {
        if (!name || !age || !telegram) {
            ernotify()
            return;
        }
        setUser(name , age , telegram)
        notify()
    }

    return(

        <>
            <ToastContainer/>

            <div className="logo_avat_item">
                <div className="logos_avatar" style={{backgroundImage: `url(${AvatarUrl.url})`}}>
                    <span className='ref' onClick={() => toggleAvatarForm() }>{
                        avatarClass === 'editAvatar_form_notActive' ? 'avatar' : 'close'
                    }</span>
                </div>

                <div className={avatarClass} >
                    <input
                        type="text"
                        value={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                        placeholder='URL avatar......'
                    />
                    <button onClick={() => changeAvatar()}>save</button>
                </div>
                <div className="container_logo" style={{marginTop:'10px'}}>
                    <div className="info_avatar" data-aos='fade-up'>
                        <button onClick={() => toggleForm()} className="edits_btn">
                            {custom === 'edit_form_notactive' ? 'edit' : '❌'}
                        </button>
                        <span><strong>NAME:</strong> {Name.name}</span>
                        <span><strong>LastName:</strong> {Age.age}</span>
                        <span> о себе</span>
                        <span style={{
                            whiteSpace: "normal",
                            overflowWrap: "break-word",
                            wordBreak: "break-word"
                        }}>
    {Telegram.telegram}
</span>

                    </div>
                </div>
            </div>




            <div className={custom}>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength="20"
                    placeholder="NAME: max 20......"
                />

                <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    maxLength="20"
                    placeholder="LastName max 20......"

                />

                <input
                    type="text"
                    value={telegram}
                    onChange={(e) => setTelegram(e.target.value)}
                    maxLength="280"
                    placeholder="About: max 280......"
                />

                <div className="btn_safety">
                    <button onClick={() => HandleClick()}>save</button>
                </div>

                </div>
        </>
    )
}