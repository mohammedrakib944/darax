import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="max-w-[360px] mx-auto hidden md:block">
      <form>
        <div className="bg-white min-w-full rounded-full overflow-hidden text-sm border border-gray-300 hover:border-black flex items-center justify-between hover:shadow-lg duration-200 ">
          <input
            className="py-2 px-4 w-full text-black outline-none"
            placeholder="Search product"
            type="text"
          />
          <button type="submit" className="px-4">
            <AiOutlineSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
