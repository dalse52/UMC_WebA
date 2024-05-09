import { movies } from '../data/movies';
import React, { useEffect, useState } from 'react';
import { fetchData } from '../api/api';

function DataComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await fetchData();
        setData(responseData);
      } catch (error) {
        // Handle error
      }
    };

    getData();
  }, []);

  return (
    <div>
      {movies ? (
        <ul>
          {movies.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DataComponent;
