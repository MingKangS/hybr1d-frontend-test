import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';

const News = () => {
	

	useEffect(() => {
		const router = useRouter()
  	const { id } = router.query
		axios.get('http://hn.algolia.com/api/v1/items/' + id.toString())
			.then(function (res) {
				console.log(res);
			})
			.catch(function (err) {
				console.log(err);
			})
	}, []);

	return ( 
		<div>

		</div>
	 );
}
 
export default News;