const ContactMe = () => {
  return (
    <>
      <div className="bg-main-200 py-20">
        <h1 className="text-4xl text-text-200 font-semibold text-center">
          Contact Me
        </h1>
        <p className="text-text-100 opacity-80 text-sm text-center py-4">
          Contact me if you have a problem, business opportunity, or suggestion
          to improve my business
        </p>
        <form
          id="contact_me"
          className="flex flex-col gap-4 mx-auto p-5 w-full max-w-[450px] h-[500px] outline outline-main-100 rounded-[3px] mt-10 bg-main-100 shadow-xl"
        >
          <input
            placeholder="Subject"
            className="py-1 h-10 w-full border-b-2 bg-main-100 border-text-100 outline-none text-text-100 transition-all focus:text-text-200 focus:placeholder:text-text-200 focus:border-text-200"
            type="text"
            autoComplete="off"
          />
          <textarea
            placeholder="Message"
            className="py-1 w-full min-h-10 max-h-80 border-b-2 mt-6 bg-main-100 border-text-100 outline-none text-text-100 transition-all focus:text-text-200 focus:placeholder:text-text-200 focus:border-text-200"
            autoComplete="off"
            rows={10}
            cols={50}
          />
          <button className="w-full h-11 bg-text-200 mt-auto rounded-sm font-semibold text-lg transition-all hover:opacity-80">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactMe;
