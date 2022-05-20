import AvatarGenerator from 'react-avatar-generator';
import styles from '../styles/Comment.module.css';
import randomHex from "../utils/utils";
import generateAvatar from "github-like-avatar-generator";

const Comment = ({ comment }) => {
	return ( 
		<div className={styles.commentContainer}>
			<div className={styles.commentHeaderDiv}>
			<img src={generateAvatar({
					blocks: 4,
					width: 25,
				}).base64}/>
				<p className={styles.authorName}>{comment.author}</p>
				<p className={styles.createdAt}>{ comment.created_at.slice(0,10) }</p>
			</div>
			
			
			<div className={styles.textDiv} dangerouslySetInnerHTML={{__html: comment.text}}></div>

			{
				comment.children.map((c,i)=> <Comment comment={c} key={i}/>)
			}
		</div>
	 );
}
 
export default Comment;