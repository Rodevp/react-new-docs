function SearchBar() {
    return (
        <form>
            <input type="text" placeholder="Search..." />
            <label>
                <input type="checkbox" />
                {' '}
                solo productos con stock
            </label>
        </form>
    )
}

export default SearchBar