const SearchArea = () => (
    <div className="col-span-3">
        <div className="">
            <input type="text" className="p-4 bg-gray-300"></input>
        </div>
        <div className="">
            <button type="button" className="p-2 rounded bg-gray-300">Clear</button>
            <button type="submit" className="p-2 rounded bg-blue-500">Get Tweets</button>
        </div>
    </div>
)

export default SearchArea;