import React from 'react';

// Custom hook
function useFetch(url) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] =React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}


const UserData = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { data } = useFetch(url);

  return (
    <div>
      <h1>Data Fetching using custom hook named useFetch</h1>
      <ul>
        {data &&
          data.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>: {post.body}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserData;
