import CometChatApp from "./CometChat/CometChatApp";
import './App.css'

const App = () => {
  return (
    /* The CometChatApp component requires a parent element with an explicit height and width  
   to render properly. Ensure the container has defined dimensions, and adjust them as needed  
   based on your layout requirements. */
    <div style={{ width: "100vw", height: "100vh" }}>
      <CometChatApp />
    </div>
  );
};

export default App
