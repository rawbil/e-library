import { Link } from "react-router-dom";

export default function LibraryHomeNavbar() {
  return (
    <header className=" w-full mx-auto bg-dark p-5 rounded mt-2 max-600px:mt-0 max-600px:rounded-none max-600px:p-5">
      <nav className="text-light">
        <Link to={"/"} className="font-logo text-2xl max-600px:text-xl">
          e-library
        </Link>
      </nav>
    </header>
  );
}
