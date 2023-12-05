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

  function updateFormData(newValue) {
    const newFormData = { ...formData };
    newFormData.title = newValue;
    setFormData(newFormData);
  }

  function handleFormSubmit() {
    const newPostList = [...postsList, formData];
    setPostList(newPostList);
    setFormData(initialFormData);
  }

  const handleDelete = (titleToDelete) => {
    const updatedPosts = postsList.filter(
      (post) => post.title !== titleToDelete
    );
    setPostList(updatedPosts);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">My form!</h1>
      <Form
        title={formData.title}
        onValueChange={(newValue) => updateFormData(newValue)}
        onSubmit={handleFormSubmit}
      />
      <PostsList posts={postsList} onDelete={handleDelete} />
    </>
  );
}

export default App;
