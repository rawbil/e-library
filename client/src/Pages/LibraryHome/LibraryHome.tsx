import { Outlet } from "react-router-dom";
import LibraryFooter from "../../Components/LibraryShared/LibraryFooter";
import LibraryHomeNavbar from "../../Components/LibraryShared/Navbar";

export default function Home() {
  return (
    <section className="flex flex-col">
      <LibraryHomeNavbar />
      <div className="">
      <Outlet /></div>
      <LibraryFooter />
    </section>
  );
}
