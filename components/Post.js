import AvatarGenerator from 'react-avatar-generator';
import styles from '../styles/Post.module.css';
import randomHex from "../utils/utils";
import Comment from './Comment';

const Post = ({ post }) => {
	console.log(post)
	return ( 
		<div className={styles.cardHeaderDiv}>
			<div className={styles.cardHeaderDiv}>
				<AvatarGenerator
					colors={[randomHex(), randomHex(), randomHex()]}
					backgroundColor={"#fff"}
					width={30}
					height={30}
				/>
				<p className={styles.authorName}>{post.author}</p>
				<p className={styles.createdAt}>{ post.created_at.slice(0,10) }</p>
			</div>
			
			
			{
				post.title &&
				<p className={styles.title}>{ post.title }</p>
			}
			
			<p className={styles.title} dangerouslySetInnerHTML={{__html: post.text}}></p>
			<p className={styles.title}>{ post.points } points</p>

			{
				post.children.map((c,i)=> <Comment comment={c} key={i}/>)
			}
		</div>
	 );
}
 
export default Post;