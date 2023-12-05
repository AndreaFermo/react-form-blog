const Form = ({ title, onValueChange, onSubmit }) => {
  function handleInputChange(e) {
    let newValue = e.target.value;

    onValueChange(newValue);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
      <h2 className="font-semibold rext-2x1 mb-4 block text-center">
        Create a Post
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={handleInputChange}
            className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
            placeholder="Enter Title"
          />
        </div>

        <button
          type="submit"
          className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Form;
