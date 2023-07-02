const Password = () => {
  return (
    <div className="flex flex-col m-20 p-2 items-center ">
      <label htmlFor="nameInput" className="m-10  text-black font-bold">
        Password
      </label>
      <input
        type="password"
        id="nameInput"
        className="border-pink-100 border-solid border-2"
      />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10">
        Next
      </button>
    </div>
  );
};

export default Password;
