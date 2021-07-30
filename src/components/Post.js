import { useState, useEffect } from 'react';
import '../styles/Post.css';
import '../styles/Post.css';
import clock from '../images/clock.svg';
import world from '../images/world.svg';
import lock from '../images/lock.svg';
import likeSvg from '../images/like.svg';
import commentSvg from '../images/users-comments.svg';
import shareSvg from '../images/share-box.svg';
import likeSvgBlack from '../images/like-black.svg';

function Post (props) {
    const { 
        post: { 
            nameFriend, imageFriend, time, whoCanView, 
            content, numberComments, likes, shares
        } 
    } = props;
    const [liked, setLiked] = useState(false);
    const [totalLikes, setTotalLikes] = useState(likes);
    const handleOwnLike = () => {
        setLiked(!liked);
    };
    const countTotalLikes = () => {
        setTotalLikes(liked ? likes + 1 : likes);
    };
    useEffect(countTotalLikes, [liked, likes]);
    return (
        <div className='Post'>
            <div className='header-post'>
                <img src={imageFriend} alt="Foto" />
                <div className='info-header-post'>
                    <h4>{nameFriend}</h4>
                    <div className='info-header-post-down'>
                        <img src={clock} alt="svg" className='icon' />
                        {time}
                        {whoCanView === 'Somente Eu' && 
                            <img src={lock} alt="svg" className='icon' />}
                        {whoCanView === 'Público' &&
                            <img src={world} alt="svg" className='icon' />}
                            {whoCanView}
                    </div>
                </div>
            </div>
            <div className='content'>
                <p>{content}</p>
            </div>
            <div className='posts-stats'>
                <div className='likes'>
                    <img src={likeSvg} alt="svg" className='icon' />
                    {!totalLikes && 'Seja o primeiro em curtir'}
                    {totalLikes === 1 && `${totalLikes} pessoa curtiu isso`}
                    {totalLikes > 1 && `${totalLikes} pessoas curtieram isso`}
                </div>
                <div className='others'>
                    <img src={commentSvg} alt="svg" className='icon' />
                    {numberComments !== 1 ? 
                        `${numberComments} comentários` : 
                        `${numberComments} comentário`}
                    <img src={shareSvg} alt="svg" className='icon' />
                    {shares !== 1 ? 
                        `${shares} compartilhamentos` : 
                        `${shares} compartilhamento`}
                </div>
            </div>
            <div className='buttons-post'>
                <button onClick={handleOwnLike}>
                    <img src={liked ? likeSvgBlack : likeSvg} alt="svg" />Curtir
                </button>
                <button>
                    <img src={commentSvg} alt="svg" />Comentários
                </button>
                <button>
                    <img src={shareSvg} alt="svg" />Compartilhar
                </button>
            </div>
        </div>
    );
}

export default Post;