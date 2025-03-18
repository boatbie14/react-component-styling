import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="button-components-section p-4 rounded-lg w-1/4 flex justify-around h-1/3 items-center">
        {/* ตั้ง default = Primary */}
        <Button>Primary Button</Button>
        <Button styleType="secondary">Secondary Button</Button>
        </div>
       <div className="w-full h-[1px] bg-white"></div>
        <div className="alert-components-section h-2/3 flex flex-col gap-10 items-center justify-center">
          {/* Render the 4 types of Alerts */}
        <Alert type="error">Error Alert</Alert>
        <Alert type="warning">Warning Alert</Alert>
        <Alert type="info">Info Alert</Alert>
        <Alert type="success">Success Alert</Alert>
      </div>
    </div>
  );
}

export default App;
