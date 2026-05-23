import {useEffect, useState} from "react";
import {baseUrl, periodMonth} from "../utils/constants.js";

const Contact = () => {
    const [planets, setPlanets] = useState(() => {
        const planets = JSON.parse(localStorage.getItem('planets'));
        if (planets && Date.now() - planets.timestamp < periodMonth) {
            return planets.payload;
        } else {
            return ["loading"];
        }
    });
    useEffect(() => {
        const getPlanets = () => {
            fetch(`${baseUrl}/v1/planets`)
                .then(response => response.json())
                .then(data => {
                    const planetsData = data.map(item => item.name);
                    setPlanets(planetsData);
                    localStorage.setItem('planets', JSON.stringify({
                        payload: planets,
                        timestamp: Date.now()
                    }));
                })
        }
        getPlanets()
    },[]);


    return (
        <div className="container">
            <form>

                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label>Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label>Planet</label>
                <select id="planet" name="planet">
                    {planets.map(item => <option value={item} key={item}>{item}</option>)}
                </select>

                <label>Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."
                          style={{height: '200px'}}></textarea>

                <input className="btn btn-danger" type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Contact;