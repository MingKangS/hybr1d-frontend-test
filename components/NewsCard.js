import Link from "next/link";
import AvatarGenerator from 'react-avatar-generator';
import styles from '../styles/NewsCard.module.css'
import randomHex from "../utils/utils";

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
					<AvatarGenerator
						colors={[randomHex(), randomHex(), randomHex()]}
						backgroundColor={"#fff"}
						width={30}
						height={30}
					/>
					<p className={styles.authorName}><em>{ formatHighlightResult(newsItem._highlightResult.author.value) }</em></p>
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
    </Link>
	 );
}
 
export default NewsCard;