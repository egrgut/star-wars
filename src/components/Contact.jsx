import '../Contact.css';
import {baseUrl, periodMonth} from "../utils/constants.js";
import {useEffect, useState} from "react";

const Contact = () => {
    const [planets, setPlanets] = useState(() => {
        const planets = JSON.parse(localStorage.getItem('planets'));
        if (planets && ((Date.now() - planets.time) < periodMonth)) {
            return planets.payload;
        } else {
            return ['wait...']
        }
    });

    useEffect(() => {
        const getPlanets = async () => {
            const res = await fetch(`${baseUrl}/v1/planets`);
            const data = await res.json();
            const planets = data.map(item => item.name);
            setPlanets(planets);
            localStorage.setItem('planets', JSON.stringify({
                payload: planets,
                time: Date.now()
            }));
        }

        if (planets.length === 1){
            getPlanets().then(() => console.log('Planets were loaded'));
        }
        return () => console.log('Contact component unmounted');
    }, [])

    return (
        <form className={"bg-white w-4/5 p-5 mx-auto"} onSubmit={e => {
            e.preventDefault();
        }}>
            <label className={"w-full"}>First Name
                <input className={"w-full p-3 border-[#ccc] border-4 mt-1.5 mb-4  text-black rounded-md resize"}
                       type="text" name="firstname" placeholder="Your name.."/>
            </label>
            <label className={"w-full"}>Last Name
                <input className={"w-full p-3 border-[#ccc] border-4 mt-1.5 mb-4  text-black rounded-md resize"}
                       type="text" name="lastname" placeholder="Your last name.."/>
            </label>
            <label className={"w-full"}>Planet
                <select className={"w-full p-3 border-[#ccc] border-4 mt-1.5 mb-4  text-black rounded-md resize"}
                        name="planet">
                    {planets.map(item => <option value={item} key={item}>{item}</option>)}
                </select>
            </label>

            <label className={"w-full"}>Subject
                <textarea className={"w-full p-3 border-[#ccc] border-4 mt-1.5 mb-4  text-black rounded-md resize"}
                          name="subject" placeholder="Write something.."></textarea>
            </label>
            <button className={"bg-[#04AA6D] rounded-md px-5 py-3   cursor-pointer text-center  text-white hover:bg-[#45a049] hover:text-white"}
                type="submit">Submit</button>
        </form>
    )
}

export default Contact;