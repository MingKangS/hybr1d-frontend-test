import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import TopBar from '../components/TopBar';
import styles from '../styles/News.module.css'

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
			<TopBar/>
			<div className={styles.postContainer}>
				
			</div>
		</div>
	 );
}
 
export default News;