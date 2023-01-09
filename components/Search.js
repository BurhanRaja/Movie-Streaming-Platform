import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {

    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (e.key === "Enter") {
            router.push({
                pathname: "/search",
                query: {
                    searchquery: searchQuery
                },
                shallow: true
            })
        }
    }
    

  return (
    <div className="flex justify-end w-[100%] mx-2">
      <input
        type="text"
        className="border-b-2 focus:border-blue-600 transition-all bg-transparent w-[75%] focus:w-[100%] focus:outline-0 text-gray-200 z-10"
        name="search"
        id="search"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={handleSearch}
      />
      <button className="pb-2 hover:cursor-default z-0">
        <AiOutlineSearch className="text-gray-500 ml-[-20px]" />
      </button>
    </div>
  );
};

export default Search;
