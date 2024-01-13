import React, { useEffect } from 'react'
import './App.css'
import axios from 'axios';

const App: React.FC = () => {
  const [data, setData] = React.useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/');
        setData(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item: any) => (
            <li key={item.text}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;