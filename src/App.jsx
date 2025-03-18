import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert.jsx";


function App() {
  return (
    <div className="App">
      <div className="button-components-section space-x-3">
        {/* Render ตัว Button 2 แบบ */}
        <Button type="Primary" /> 
        <Button type="Secondary" /> 
      </div>
      <hr />
      <div className="alert-components-section my-10 space-y-3">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert type="error" />
        <Alert type="warning" />
        <Alert type="info" /> 
        <Alert type="success" />
      </div>
    </div>
  );
}

export default App;
