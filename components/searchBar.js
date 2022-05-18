const SearchBar = ({ onChangeSearchQuery, styles }) => {
	return ( 
		<input 
			className={styles.searchBar}
			placeholder="Search for your Hacker News here"
			onChange={(e) => onChangeSearchQuery(e.target.value)}
		/>
	 );
}
 
export default SearchBar;