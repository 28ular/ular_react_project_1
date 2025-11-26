import {useAboutf} from "../../../store/AboutF.js";
import {useState} from "react";

export const About = () => {
    const {user , setName} = useAboutf()
    const [input , setInput] = useState('')
    const [inpu , setInp] = useState('')

    return (
            <>
                <h1>{user.name}</h1>
                <h2>{user.age}</h2>
                <button onClick={() => setName(input , inpu)}>change</button>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />


            </>
    )
}