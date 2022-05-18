const SearchBar = ({ onChangeSearchQuery }) => {
	return ( 
		<input 
			className="searchBar"
			placeholder="Search for your Hacker News here"
			onChange={(e) => onChangeSearchQuery(e.target.value)}
		/>
	 );
}
 
export default SearchBar;