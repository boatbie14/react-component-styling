import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="button-components-section bg-red-200 p-4 rounded-lg w-1/4 flex justify-around h-1/3 items-center">
        {/* ตั้ง default = Primary */}

        <Button>Primary Button</Button> 
        <Button styleType="secondary">Secondary Button</Button>
  
      </div>

      <div className="alert-components-section h-2/3">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert type="error">Error Alert</Alert>
        <Alert type="warning">Warning Alert</Alert>
        <Alert type="info">Info Alert</Alert>
        <Alert type="success">Success Alert</Alert>
      </div>
    </div>
  );
}

export default App;
