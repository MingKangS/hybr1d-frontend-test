import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';

const News = () => {
	const router = useRouter()

	useEffect(() => {
		if(!router.isReady) return;

  	const { id } = router.query
		console.log(id)
		axios.get('http://hn.algolia.com/api/v1/items/' + id.toString())
			.then(function (res) {
				console.log(res);
			})
			.catch(function (err) {
				console.log(err);
			})
	}, [router.isReady]);

	return ( 
		<div>

		</div>
	 );
}
 
export default News;