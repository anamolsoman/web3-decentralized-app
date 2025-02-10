const PaymentForm = ({ name, message, setName, setMessage, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="">
      <div className="flex align-center justify-center mb-4">
        {" "}
        <img src="coffee-icon-large.png" className="w-15 h-15 mr-4"></img>
        <h2 className="text-5xl flex justify-center items-center font-semibold text-[#EED8BF]  ">
          Buy Me A Coffee
        </h2>
      </div>

      {/* Name Input */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-[#EED8BF] font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 text-white border border-gray-300 rounded-md focus:outline-none "
          // placeholder="Enter your name"
          required
        />
      </div>

      {/* Message Input */}
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block  text-[#EED8BF] font-medium mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 text-white border border-[#EED8BF] rounded-md focus:outline-none  focus:ring-blue-50"
          // placeholder="Enter your message"
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-[#EED8BF] text-black font-semibold rounded-md cursor-pointer focus:outline-none "
      >
        Buy A Coffee
      </button>
    </form>
  );
};

export default PaymentForm;
