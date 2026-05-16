import "./styles.css";

function SendWishesForm({
  senderName,
  wishMessage,
  isLoadingButton,
  onSenderChanged,
  onWishMessageChanged,
  onSubmit,
}) {
  return (
    <div className="bg-white p-8 w-100 rounded-lg shadow-2xl wish-form">
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="uname"
            className="block text-[#126DA6] font-light mb-2 text-center"
          >
            Tên của bạn
          </label>
          <input
            id="uname"
            type="text"
            name="uname"
            className="w-full p-2 border rounded-lg focus:ring-1 focus:outline-none focus:ring-[#126DA6] border-gray-400 focus:border-[#126DA6] text-[#126DA6] dark:focus:outline-none dark:focus:border-[#126DA6]"
            placeholder="Tên của bạn..."
            value={senderName}
            onChange={(e) => onSenderChanged(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="wish-msg"
            className="block text-[#126DA6] font-light mb-2 text-center"
          >
            Lời nhắn gửi
          </label>
          <textarea
            id="wish-msg"
            name="wish-msg"
            className="w-full p-2 border rounded-lg focus:ring-1 focus:outline-none focus:border-[#126DA6] focus:ring-[#126DA6] resize-none border-gray-400 text-[#126DA6] dark:focus:outline-none dark:focus:border-[#126DA6]"
            placeholder="Lời nhắn gửi..."
            rows="4"
            value={wishMessage}
            onChange={(e) => onWishMessageChanged(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isLoadingButton}
          className="w-full py-2 text-white rounded-lg bg-[#126DA6] transition flex items-center justify-center cursor-pointer hover:bg-[#126DA6]"
        >
          {isLoadingButton ? (
            <>
              <svg
                className="animate-spin h-6 w-6 mr-2 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="white"
                  strokeWidth="1"
                ></circle>
                <path
                  className="opacity-75"
                  fill="white"
                  d="M4 12a8 8 0 0116 0h-2a6 6 0 10-12 0H4z"
                ></path>
              </svg>
            </>
          ) : (
            "Gửi lời chúc"
          )}
        </button>
      </form>
    </div>
  );
}

export default SendWishesForm;
