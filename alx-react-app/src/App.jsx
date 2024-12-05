import './App.css'
import WelcomeMessage from './component/WelcomeMessage'
import Header from './component/Header';
import MainContent from './component/MainContent';
import Footer from './component/Footer';
import UserProfile from './component/UserProfile';

function App() {

  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </div>
  );
}

export default App
