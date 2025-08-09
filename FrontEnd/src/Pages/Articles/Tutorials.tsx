import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Short_Header from "../../Components/Short_Header/Short_Header";
import Article from "./Article/Article";
import Sidebar_Article from "./Sidebar_Article/Sidebar_Article";

const Articles = () => {
  return (
    <>
      <div className="container">
        <Short_Header />
      </div>
      <div className="flex flex-row-reverse pl-16 pr-8 relative max-md:flex-col-reverse max-md:pl-8 max-md:gap-8">
        <aside className="min-h-200 flex-2 tutorial_page_shadow rounded-2xl max-lg:flex-2 max-lg:h-fit max-lg:sticky max-lg:top-5">
          <h2 className="font-morabba-bold text-2xl text-center p-4">تازه ترین</h2>

          <ul className="flex flex-col gap-8 px-4">
            <li>
              <Link to="articles/article-1">
                <Sidebar_Article />
              </Link>
            </li>
            <li>
              <Link to="articles/article-1">
                <Sidebar_Article />
              </Link>
            </li>
            <li>
              <Link to="articles/article-1">
                <Sidebar_Article />
              </Link>
            </li>
            <li>
              <Link to="articles/article-1">
                <Sidebar_Article />
              </Link>
            </li>
          </ul>
        </aside>

        <div className="flex flex-7 flex-wrap gap-8 max-2xl:flex-4 max-lg:flex-5 max-md:justify-between">
          <Link to="title">
            <Article />
          </Link>
          <Link to="title">
            <Article />
          </Link>
          <Link to="title">
            <Article />
          </Link>
          <Link to="title">
            <Article />
          </Link>
          <Link to="title">
            <Article />
          </Link>
          <Link to="title">
            <Article />
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Articles;
