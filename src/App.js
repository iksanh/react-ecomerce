import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

import Authentication from "./routes/authentication/authentication.component";

const Shoep = () => {
  return <h1>Selamat datang di shoop</h1>;
};

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/shoep" element={<Shoep />} /> */}

      {/* membuat nested route  */}
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shoep />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
