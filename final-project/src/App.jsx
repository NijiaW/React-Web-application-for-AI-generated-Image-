import './App.css';
import Header from './Header';
import MainArea from './MainArea';
import Footer from './Footer';
import { useEffect, useState } from 'react';

function App() {
  const [page, setPage] = useState('home');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect( () => {
    function handlePageLoad() {
      setPage(document.location.hash || '#/'); // || for no hash case
    }
    handlePageLoad(); // Initial page load
    
    window.addEventListener('popstate', handlePageLoad);
      return () => {
        window.removeEventListener('popstate', handlePageLoad);
      }
    }, []); // Important to have empty dependency array!

    useEffect(() => {
      localStorage.setItem('theme', theme);
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
    
  return (
    <div className={`app ${theme}-theme`}>
      <Header page={page} setPage={setPage} theme={theme} toggleTheme={toggleTheme}/>
      <MainArea page={page} setPage={setPage}/>
      <Footer setPage={setPage}/>
    </div>
  );
}
export default App;