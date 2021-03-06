import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import TopBar from '../components/TopBar';
import styles from '../styles/News.module.css';
import Post from '../components/Post';
import Loading from '../components/Loading';

const News = () => {
	const router = useRouter()

	const [post, setPost] = useState(null)

	useEffect(() => {
		if(!router.isReady) return;

  	const { id } = router.query
		console.log(id)
		axios.get('http://hn.algolia.com/api/v1/items/' + id.toString())
			.then(function (res) {
				setPost(res.data)
				console.log(res);
			})
			.catch(function (err) {
				console.log(err);
			})
	}, [router.isReady]);

	return ( 
		<div>
			{
				!post && 
				<div className="loading">
					<Loading/>
					
				</div>
			}
			<TopBar/>
			{
				post ? 
				<div className={styles.postContainer}>
					<Post post={post}/>
				</div>
				: 
				<div></div>
			}
			
		</div>
	 );
}
 
export default News;