import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button type="primary" />
        <Button type="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert type="error">error</Alert>
        <Alert type="warning">warning</Alert>
        <Alert type="info">info</Alert>
        <Alert type="success">success</Alert>
      </div>
    </div>
  );
}

export default App;
