import {starWarsInfo} from "../utils/constants.js";

const StarWars = () => {
    return (
        <div className={'far-galaxy fs-2 lh-2'}>
            {starWarsInfo}
        </div>
    )
}

export default StarWars;