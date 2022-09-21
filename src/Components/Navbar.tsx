import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='absolute h-8 align-center z-10 text-white font-bold mt-2 border-b-2 w-full flex justify-between px-32'>
        <div className="flex justify-between w-40 ">
            <Link className="hover:bg-gray-200 hover:text-black rounded" to="/movies">Movies</Link>
            <Link className="hover:bg-gray-200 hover:text-black rounded" to="/tv-series">Tv Series</Link>
        </div>
        <div>
            <div>Jong Jacke</div>
        </div>
    </div>
  )
}

export default Navbar