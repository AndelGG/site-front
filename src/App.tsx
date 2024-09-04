import React, { useEffect } from 'react'
import './style.css'
import axios, {  AxiosResponse } from 'axios';
import Cookies from 'js-cookie'

interface jData {
  num: string
}

const App: React.FC = () => {
  const [data, setData] = React.useState<string>('');

  let num: string | undefined = Cookies.get('num');
  if (num === undefined) {
    num = '0'
    Cookies.set('num', num, { expires: 7 });
  }

  const removeCookie: () => void = () => {
    Cookies.remove('num');
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<jData> = await axios.get('http://localhost:3000/', {
        params: {
          num: num
        }});
        setData(response.data.num);
        Cookies.set('num', response.data.num, { expires: 7 });
      } catch (error) {
        console.error('Шпэк недоволен:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <p>{data}</p>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={removeCookie}>remove</button>
    </div>
  );
};

export default App;