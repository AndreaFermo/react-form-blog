import { useState } from "react";
import Form from "./components/Form";
import PostsList from "./components/PostsList";

import "./App.css";

function App() {
  const initialFormData = {
    title: "",
  };

  const [postsList, setPostList] = useState([]);
  const [formData, setFormData] = useState(initialFormData);

  function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36);
  }

  function handleFormSubmit() {
    const newPost = {
      id: generateUniqueId(),
      title: formData.title,
    };

    const newPostList = [...postsList, newPost];
    setPostList(newPostList);
    setFormData(initialFormData);
  }

  function handleDelete(idToDelete) {
    const updatedPosts = postsList.filter((post) => post.id !== idToDelete);
    setPostList(updatedPosts);
  }

  function handleEdit(idToEdit) {
    const postToEdit = postsList.find((post) => post.id === idToEdit);
    if (postToEdit) {
      updateFormData(postToEdit.title);
      handleDelete(idToEdit);
    }
  }

  function updateFormData(newValue) {
    const newFormData = { ...formData };
    newFormData.title = newValue;
    setFormData(newFormData);
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">My form!</h1>
      <Form
        title={formData.title}
        onValueChange={(newValue) => updateFormData(newValue)}
        onSubmit={handleFormSubmit}
      />
      <PostsList
        posts={postsList}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </>
  );
}

export default App;
