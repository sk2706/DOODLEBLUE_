
const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function getPost() {
  const response = await fetch(`${API_URL}/1`);
  const data = await response.json();

  console.log("GET Response:", data);
}


async function createPost() {
  const newPost = {
    title: "My First API",
    body: "Learning JavaScript REST APIs",
    userId: 1
  };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newPost)
  });

  const data = await response.json();
  console.log("POST Response:", data);
}


async function updatePost() {
  const updatedPost = {
    id: 1,
    title: "Updated Title",
    body: "Completely updated content",
    userId: 1
  };

  const response = await fetch(`${API_URL}/1`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedPost)
  });

  const data = await response.json();
  console.log("PUT Response:", data);
}

async function patchPost() {
  const changes = {
    title: "Only Title Changed"
  };

  const response = await fetch(`${API_URL}/1`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(changes)
  });

  const data = await response.json();
  console.log("PATCH Response:", data);
}

async function deletePost() {
  const response = await fetch(`${API_URL}/1`, {
    method: "DELETE"
  });

  console.log("DELETE Status:", response.status);

  if (response.ok) {
    console.log("Post deleted successfully!");
  }
}

getPost();
createPost();
updatePost();
patchPost();
deletePost();
