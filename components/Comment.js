import AvatarGenerator from 'react-avatar-generator';
import styles from '../styles/Comment.module.css';
import randomHex from "../utils/utils";

const Comment = ({ comment }) => {
	return ( 
		<div className={styles.cardHeaderDiv}>
			<div className={styles.cardHeaderDiv}>
				<AvatarGenerator
					colors={[randomHex(), randomHex(), randomHex()]}
					backgroundColor={"#fff"}
					width={30}
					height={30}
				/>
				<p className={styles.authorName}>{comment.author}</p>
				<p className={styles.createdAt}>{ comment.created_at.slice(0,10) }</p>
			</div>
			
			
			<p className={styles.title} dangerouslySetInnerHTML={{__html: comment.text}}></p>

			{
				comment.children.map((c,i)=> <Comment comment={c} key={i}/>)
			}
		</div>
	 );
}
 
export default Comment;