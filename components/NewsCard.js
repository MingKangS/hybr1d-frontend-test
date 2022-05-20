import Link from "next/link";
import AvatarGenerator from 'react-avatar-generator';
import styles from '../styles/NewsCard.module.css'
import randomHex from "../utils/utils";
import generateAvatar from "github-like-avatar-generator";

const NewsCard = ({ newsItem, indexStyles }) => {
	let text = "once upon a time, \t there was a man \t who had a house." ;

	const formatHighlightResult = (val) => {
		return val.replaceAll("</em>", "<em>")
			.split("<em>")
			.map((s,i)=> i % 2 == 1 ? <b>{s}</b> : s )
	}

	
	return ( 
		<Link href={"/" + newsItem.objectID}>
      <div className={styles.newsCard}>
				<div className={styles.cardHeaderDiv}>
					<img src={generateAvatar({
						blocks: 4,
						width: 25,
					}).base64}/>
					<p className={styles.authorName}>{ formatHighlightResult(newsItem._highlightResult.author.value) }</p>
					<p className={styles.createdAt}>{ newsItem.created_at.slice(0,10) }</p>
				</div>
				
        {
					newsItem._highlightResult.title ? 
					<p className={styles.title}>{ formatHighlightResult(newsItem._highlightResult.title.value) }</p>
					: <p className={styles.title}>{ formatHighlightResult(newsItem._highlightResult.story_text.value) }</p>
				}
        
				{
					newsItem._highlightResult.url &&
					<p className={styles.url}>{ formatHighlightResult(newsItem._highlightResult.url.value) }</p>
				}
				
				<div className={styles.bottomDiv}>
					<p className={styles.points}>{ newsItem.points } points  </p>
					{
						newsItem.num_comments && <p className={styles.comments}>{ newsItem.num_comments } comments</p>
					}
					
				</div>
				
      </div>
    </Link>
	 );
}
 
export default NewsCard;