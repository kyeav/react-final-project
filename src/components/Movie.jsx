import { Link } from "react-router-dom";
function Movie() {
  return (
    <div className="flex flex-col space-y-6">
      {/* movie image */}
      <Link to="/movie">
        <figure className="rounded-md overflow-hidden group">
          <img 
            src="" 
            className="group-hover:scale-110 duration-200 ease" 
            alt="" 
          />
        </figure>
      </Link>
      <div className="aspect-[2/3] animated-bg"></div>

      {/* movie details */}
      <div className="flex flex-col space-y-4">
        {/* title and release date */}
        <div className="flex justify-between">
          <Link 
            to="/movie" 
            className="font-semibold max-w-[80%] break-word overflow-hidden">
            Bullet Train
          </Link>

          <div className="text-accent text-sm font-medium">
            2022
          </div>
        </div>

        {/* language and rating */}
        <div className="flex justify-between">
          <div className="px-2 py-1 border-2 border-white text-accent text-xs uppercase font-bold">
            EN
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-xs">
              <i className="fa-solid fa-thumbs-up text-accent"></i>
              <span className="text-gray-200">7.5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
