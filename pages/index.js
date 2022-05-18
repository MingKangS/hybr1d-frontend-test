import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import NewsCard from '../components/NewsCard';
import SearchBar from '../components/searchBar';
import axios from 'axios';

export default function Home() {
	const [searchQuery, setSearchQuery] = useState("")
	const [searchResults, setSearchResults] = useState([])
	
	const onChangeSearchQuery = (newQueryStr) => {
		console.log(newQueryStr)
		axios.get('http://hn.algolia.com/api/v1/search?query=' + searchQuery)
			.then(function (res) {
				console.log(res);
			})
			.catch(function (err) {
				console.log(err);
			})
	}

  return (
    <div className={styles.container}>
      <div className="header">
				<h1>Hacker News</h1>
			</div>
			<div className="searchBarContainer">
				<SearchBar onChangeSearchQuery={onChangeSearchQuery}/>
			</div>
			<div className="newsCardContainer">
				{searchResults.map((n, idx) => (
          <NewsCard/>
        ))}
			</div>
    </div>
  )
}
