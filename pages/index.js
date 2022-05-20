import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import SearchBar from '../components/searchBar';
import axios from 'axios';
import TopBar from '../components/TopBar';

export default function Home() {
	const [searchQuery, setSearchQuery] = useState("")
	const [searchResults, setSearchResults] = useState([])
	const [resultsPageNumber, setResultsPageNumber] = useState(1)
	const [debounceTimeout, setDebounceTimeout] = useState(null)
	const [isFetchingResults, setIsFetchingResults] = useState(false)

	useEffect(() => {
		fetchSearchResults(searchQuery)
	}, [resultsPageNumber]);

	useEffect(() => {
		document.getElementById("container").addEventListener('scroll', handleScroll);
	}, []);

	const onChangeSearchQuery = (newQueryStr) => {
		clearTimeout(debounceTimeout)
		setDebounceTimeout(setTimeout(() => fetchSearchResults(newQueryStr), 1000))
	}
	
	const fetchSearchResults = (newQueryStr) => {
		setIsFetchingResults(true)
		console.log("axois fetching")
		axios.get('http://hn.algolia.com/api/v1/search?tags=story&query=' + newQueryStr + "&page=" + resultsPageNumber)
			.then(function (res) {
				console.log(res.data.hits);
				setSearchResults(searchResults.concat(res.data.hits))
				setIsFetchingResults(false)
			})
			.catch(function (err) {
				console.log(err);
			})
	}

	const handleScroll = () => {
		console.log("scroll")
		const newsCardContainer = document.getElementById('newsCardContainer');
		const bottom = newsCardContainer.getBoundingClientRect().bottom <= window.innerHeight;
    if (bottom && !isFetchingResults) { 
			console.log("scroll search")
			setResultsPageNumber(resultsPageNumber => resultsPageNumber+1)
			
		}
	}



  return (
    <div id="container" className={styles.container}>
      <TopBar/>
			<div className={styles.searchBarContainer}>
				<SearchBar onChangeSearchQuery={onChangeSearchQuery} styles={styles}/>
			</div>
			<div id="newsCardContainer" className={styles.newsCardContainer}>
				{searchResults.map((newsItem, idx) => (
          <NewsCard newsItem={newsItem} styles={styles} key={idx}/>
        ))}
			</div>
    </div>
  )
}
