import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Games from "./components/Games/Games";
import Categories from "./components/Categories/Categories";
import EditGame from "./components/EditGame/EditGame";
import NewGame from "./components/NewGames/NewGames";
import EditCategory from "./components/EditCategory/EditCategory";
import NewCategory from "./components/NewCategory/NewCategory";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="games" element={<Games />} />
          <Route path="editgame/:id" element={<EditGame />} />
          <Route path="newgame" element={<NewGame/>}/>
          <Route path="categories" element={<Categories />} />
          <Route path="editcategories/:id" element={<EditCategory/>}/>
          <Route path="newcategories" element={<NewCategory/>}/>

        </Route>
      </Routes>

    </Router>
  );
}

export default App;
