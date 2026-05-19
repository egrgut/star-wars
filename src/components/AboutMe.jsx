import {useState, useEffect} from "react";
import {baseUrl} from "../utils/constants.js";

const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState();

    useEffect(() => {
        const character = 1;
        fetch(`${baseUrl}/v1/peoples/${character}`)
            .then(res => res.json())
            .then(data => {
                const meta = {
                    name: data.name,
                    birth_year: data.birth_year,
                    homeworld: data.homeworld,
                    gender: data.gender,
                    height: data.height,
                }
                setAboutMe(meta)
            })
            .catch(() => setAboutMe("Error loading character"));
    }, []);

    if (aboutMe) {
        return (
            <div className="far-galaxy fs-2 lh-2">
                <p>Name: {aboutMe.name}</p>
                <p>Birth year: {aboutMe.birth_year}</p>
                <p>homeworld: {aboutMe.homeworld}</p>
                <p>Gender: {aboutMe.gender}</p>
                <p>Height: {aboutMe.height}</p>
            </div>
        )
    } else {
        return (
            <p className="far-galaxy fs-2 lh-2">
                <span className={'spinner-border'}></span>
            </p>
        )
    }
}


export default AboutMe;