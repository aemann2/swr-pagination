import React, { useState } from 'react';
import useSWR from 'swr';
// pulling in the pre-configured fetcher (which uses fetch) from utils
import { fetcher } from './utils/fetcher';
import './styles.css';

export default function App() {
  const [pageIndex, setPageIndex] = useState(0);

  // passing the pagination state to the endpoint
  const url = `https://gp-super-store-api.herokuapp.com/item/list?size=6&sortDir=asc&from=${pageIndex}`;

  // this is the whole fetch operation...very concise
  const { data, error } = useSWR(url, fetcher);
  if (error) return 'An error has occurred.';
  if (!data) return 'Loading...';

  return (
    <div>
      {data.items.map((item) => (
        <div key={item._id}>{item.name}</div>
      ))}
      <button onClick={() => setPageIndex(pageIndex >= 6 && pageIndex - 6)}>
        Previous
      </button>
      <button
        onClick={() =>
          setPageIndex(data.hasMore ? pageIndex + 6 : pageIndex + 0)
        }
      >
        Next
      </button>
    </div>
  );
}
