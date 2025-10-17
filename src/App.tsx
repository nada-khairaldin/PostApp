import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostContainer from "./Pages/PostContainer";
import PostDetails from "./Pages/PostDetails/PostDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostContainer />} />
        <Route path="posts" element={<PostContainer />} />
        <Route path="posts/:id" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
