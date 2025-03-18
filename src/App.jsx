import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="button-components-section p-4 rounded-lg w-2/6 flex justify-around h-1/3 items-center">
        {/* ตั้ง default = Primary */}
        <Button>Button</Button>
        <Button styleType="secondary">Button</Button>
        </div>
       <div className="w-1/3 h-[1px] bg-white"></div>
        <div className="alert-components-section h-2/3 flex flex-col gap-10 items-center justify-center">
          {/* Render the 4 types of Alerts */}
        <Alert type="error">This is error alert box</Alert>
        <Alert type="warning">This is a warning alert box</Alert>
        <Alert type="info">This is an info alert box</Alert>
        <Alert type="success">This is a success alert box</Alert>
      </div>
    </div>
  );
}

export default App;
