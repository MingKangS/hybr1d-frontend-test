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
	const [debounceTimeout, setDebounceTimeout] = useState(null)

	const onChangeSearchQuery = (newQueryStr) => {
		clearTimeout(debounceTimeout)
		setDebounceTimeout(setTimeout(() => fetchSearchResults(newQueryStr), 1000))
	}
	
	const fetchSearchResults = (newQueryStr) => {

		console.log(newQueryStr)
		axios.get('http://hn.algolia.com/api/v1/search?query=' + newQueryStr)
			.then(function (res) {
				console.log(res, res.data.hits);
				setSearchResults(res.data.hits)
			})
			.catch(function (err) {
				console.log(err);
			})
	}

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
				<h1 className={styles.header}>Hacker News</h1>
			</div>
			<div className={styles.searchBarContainer}>
				<SearchBar onChangeSearchQuery={onChangeSearchQuery} styles={styles}/>
			</div>
			<div className={styles.newsCardContainer}>
				{searchResults.map((newsItem, idx) => (
          <NewsCard newsItem={newsItem} styles={styles} key={idx}/>
        ))}
			</div>
    </div>
  )
}
