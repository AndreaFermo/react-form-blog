const PostsList = ({ posts, onDelete }) => {
  const handleDelete = (title) => {
    onDelete(title);
  };

  return (
    <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
      <h2 className="font-semibold rext-2x1 mb-4 block text-center">Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.title} className="flex justify-between py-4 border-b">
            <div>{post.title}</div>
            <div
              className="bg-red-500 hover:bg-red-300 px-2 font-bold rounded hover:cursor-pointer"
              onClick={() => handleDelete(post.title)}
            >
              X
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
