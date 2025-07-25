import { useEffect, useState } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';
import NewsFeed from '../pages/NewsFeed/NewsFeed';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkQuery.addEventListener('change', handleChange);
    return () => darkQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
      }}
    >
      <NewsFeed />
    </ConfigProvider>
  );
};

export default App;
