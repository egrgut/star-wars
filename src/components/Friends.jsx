import friend1 from '../assets/friend1.jpg'
import friend2 from '../assets/friend2.jpg'
import friend3 from '../assets/friend3.jpg'
import friend4 from '../assets/friend4.jpg'
import friend5 from '../assets/friend5.jpg'
import friend6 from '../assets/friend6.jpg'
import friend7 from '../assets/friend7.jpg'
import friend8 from '../assets/friend8.jpg'
import friend9 from '../assets/friend9.jpg'

const Friends = () => {
    return (
        <section className="float-end w-50 row border border-warning rounded-bottom-5 ms-1 me-0">
            <h2 className="text-center">Dream team</h2>
            <img className="col-sm-4 p-1" src={friend1} alt="Friend"/>
            <img className="col-sm-4 p-1" src={friend2} alt="Friend"/>
            <img className="col-sm-4 p-1" src={friend3} alt="Friend"/>
            <img className="col-sm-4 p-1" src={friend4} alt="Friend"/>
            <img className="col-sm-4 p-1" src={friend5} alt="Friend"/>
            <img className="col-sm-4 p-1" src={friend6} alt="Friend"/>
            <img className="col-sm-4 p-1 rounded-bottom-left" src={friend7} alt="Friend"/>
            <img className="col-sm-4 p-1" src={friend8} alt="Friend"/>
            <img className="col-sm-4 p-1 rounded-bottom-right" src={friend9} alt="Friend"/>
        </section>
    );
};

export default Friends;