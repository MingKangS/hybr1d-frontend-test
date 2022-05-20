import AvatarGenerator from 'react-avatar-generator';
import styles from '../styles/Post.module.css';
import randomHex from "../utils/utils";
import Comment from './Comment';
import generateAvatar from "github-like-avatar-generator";

const Post = ({ post }) => {
	console.log(post)
	return ( 
		<div className={styles.postContainer}>
			<div className={styles.postHeaderDiv}>
				<img src={generateAvatar({
					blocks: 4,
					width: 30,
				}).base64}/>
				<p className={styles.authorName}>{post.author}</p>
				<p className={styles.createdAt}>{ post.created_at.slice(0,10) }</p>
			</div>
			
			
			{
				post.title &&
				<p className={styles.title}>{ post.title }</p>
			}
			
			<p className={styles.text} dangerouslySetInnerHTML={{__html: post.text}}></p>
			<p className={styles.points}>{ post.points } points</p>

			{
				post.children.map((c,i)=> <Comment comment={c} key={i}/>)
			}
		</div>
	 );
}
 
export default Post;