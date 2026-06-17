
import Layout from "./Layout";
import MyTask from "./screens/MyTask";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskBoard from "./screens/TaskBoard";
import Setting from "./screens/Setting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mytask" element={<MyTask />} />
          <Route path="taskboard" element={<TaskBoard/>}/>
          <Route path="setting" element={<Setting/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;