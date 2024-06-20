export const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    throw error;
  }
};

export const fetchPostById = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const post = await response.json();
    return post;
  } catch (error) {
    console.error(`Failed to fetch post with id ${id}:`, error);
    throw error;
  }
};

export const sequentialPromise = async (promises, order) => {
  try {
    const results = [];
    for (let index of order) {
      const result = await promises[index - 1];
      results.push(result);
    }
    return results;
  } catch (error) {
    console.error("Error executing promises sequentially:", error);
    throw error;
  }
};

// Example usage:
// const promises = [
//   Promise.resolve("data1"),
//   Promise.resolve("data2"),
//   Promise.resolve("data3"),
// ];
// const order = [2, 1, 3];
// sequentialPromise(promises, order).then(console.log).catch(console.error); // ["data2", "data1", "data3"]
