import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostContainer from "./components/PostContainer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostContainer />} />
        <Route path="posts" element={<PostContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
