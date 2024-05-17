export async function testGetData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await res.json();
  return data.slice(0, 5);
}
