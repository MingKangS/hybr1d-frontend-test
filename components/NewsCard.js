import Link from "next/link";
import AvatarGenerator from 'react-avatar-generator';

const NewsCard = ({ newsItem, styles }) => {
	let text = "once upon a time, \t there was a man \t who had a house." ;

	const formatHighlightResult = (val) => {
		return val.replaceAll("</em>", "<em>")
			.split("<em>")
			.map((s,i)=> i % 2 == 1 ? <b>{s}</b> : s )
	}

	const randomHex = () => {
		return "#" + Math.floor(Math.random()*16777215).toString(16)
	}
	return ( 
		<Link href={"/" + newsItem.objectID}>
      <div className={styles.newsCard}>
				<AvatarGenerator
					colors={[randomHex(), randomHex(), randomHex()]}
					backgroundColor={"#fff"}
					width={40}
					height={40}
				/>
        <p className={styles.title}><em>{ formatHighlightResult(newsItem._highlightResult.author.value) }</em></p>
        <p className={styles.title}>{ formatHighlightResult(newsItem._highlightResult.title.value) }</p>
        
      </div>
    </Link>
	 );
}
 
export default NewsCard;