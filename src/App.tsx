import './App.scss';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      {/* side */}
      <Sidebar />
      {/* chat */}
      <Chat />
    </div>
  );
}

export default App;
