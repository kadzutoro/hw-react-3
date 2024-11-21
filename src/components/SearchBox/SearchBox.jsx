export const SearchBox = ({value, onFilter}) => {
    return (
        <div>
            <p>Find contacts by name</p>
            <input
            placeholder="name"
            type="text"
            value={value}
            onChange={e => onFilter(e.target.value)}
            />
        </div>
    )
}