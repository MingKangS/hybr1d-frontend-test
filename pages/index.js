import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';


export default function Home() {
	const [searchQuery, setSearchQuery] = useState("")
	
  return (
    <div className={styles.container}>
      <div className="header">
				<h1>Hacker News</h1>
			</div>
			<div>
				<input 
					className="searchBar"
					placeholder="Search for your Hacker News here"
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</div>
    </div>
  )
}
