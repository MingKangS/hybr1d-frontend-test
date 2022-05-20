import AvatarGenerator from 'react-avatar-generator';
import styles from '../styles/Post.module.css';

const Post = ({ post }) => {
	return ( 
		<div className={styles.cardHeaderDiv}>
			<div className={styles.cardHeaderDiv}>
				<AvatarGenerator
					colors={[randomHex(), randomHex(), randomHex()]}
					backgroundColor={"#fff"}
					width={30}
					height={30}
				/>
				<p className={styles.authorName}>{post.title}</p>
				<p className={styles.createdAt}>{ newsItem.created_at.slice(0,10) }</p>
			</div>
			
			{
				newsItem._highlightResult.title ? 
				<p className={styles.title}>{ formatHighlightResult(newsItem._highlightResult.title.value) }</p>
				: <p className={styles.title}>{ formatHighlightResult(newsItem._highlightResult.story_text.value) }</p>
			}
			
			{
				newsItem._highlightResult.url &&
				<p className={styles.title}>{ formatHighlightResult(newsItem._highlightResult.url.value) }</p>
			}
			
			<p className={styles.title}>{ newsItem.points } points</p>
			<p className={styles.title}>{ newsItem.num_comments } comments</p>
		</div>
	 );
}
 
export default Post;