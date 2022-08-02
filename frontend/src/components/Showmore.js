import  { useState } from 'react';
import { FaThumbsUp,FaThumbsDown } from 'react-icons/fa';

const Showmore = () => {
    const [showMore, setShowMore] = useState(false);
    // let liked = true;
    // let disliked = false;
    // eslint-disable-next-line
    let Text = 'Im ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationaliqua. Ut enim ad minim veniam, quis nostrud exercitation aliqua. Ut enim ad minim veniam, quis nostrud exercitation tje emd'
                    
        return (
            <div>
                <h4 className='commentText'>
                {showMore ? Text : `${Text.substring(0, 190)+'...'}`}
                <button className="btnShow" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}
                </button>
                </h4>
                <div className='likeUnlike'>
                       <FaThumbsUp className='commentlike' />
                        <p className='likeCount'>1.2k</p>
                        <FaThumbsDown className='commentUnlike' />
                        <p className='likeCount'>350</p>


                </div>
        </div>
        )
}
export default Showmore;


