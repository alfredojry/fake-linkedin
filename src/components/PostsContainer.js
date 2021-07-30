import Write from './Write';
import Post from './Post';
import '../styles/PostsContainer.css';

function PostsContainer (props) {
    const { posts } = props;
    return (
        <div className='PostsContainer'>
            <Write />
            {!posts.length && <p>Nada para mostrar</p>}
            {posts.map((item, index) =>
                <Post post={item} key={index} />)}
        </div>
    );
}

export default PostsContainer;