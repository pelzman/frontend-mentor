import Result from "./Components/Result/Result";
import SummaryList from "./Components/SummaryList/SummaryList";
import { Button } from "antd";
function App() {
  return (
    <div className="App">
      <div className="container">
      <Result />
      <div>
        <SummaryList />
        <button className="btn">Continue</button>
      </div>
      </div>
     
    </div>
  );
}

export default App;
