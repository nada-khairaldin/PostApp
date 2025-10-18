import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsPage from "./Pages/PostsPage/PostsPage";
import PostDetailsPage from "./Pages/PostDetailsPage/PostDetailsPage";
import "./index.css";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts/:id" element={<PostDetailsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
