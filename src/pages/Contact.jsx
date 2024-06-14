const Contact = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-4 md:p-0">
      <div className="flex flex-col md:flex-row gap-4 h-full md:h-[calc(100vh-96px)] mt-24">
        <div className="w-full md:w-[50%]">
          <img src="https://i.ibb.co/vktqmkR/mail.png" alt="" />
        </div>
        <div className="w-full md:w-[50%]">
          <p className="text-primary">Send us email</p>
          <h2 className="text-4xl py-6 font-semibold">Feel free to write</h2>

          <form action="">
            <div className="flex justify-center items-center gap-4 mt-6">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="w-full py-3 px-3 border border-primary/20 bg-secondary/20 outline-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="w-full py-3 px-3 border border-primary/20 bg-secondary/20 outline-primary"
              />
            </div>
            <div className="flex justify-center items-center gap-4 mt-6">
              <input
                type="text"
                name="subject"
                placeholder="Enter Subject"
                className="w-full py-3 px-3 border border-primary/20 bg-secondary/20 outline-primary"
              />
              <input
                type="text"
                name="number"
                placeholder="Enter Phone"
                className="w-full py-3 px-3 border border-primary/20 bg-secondary/20 outline-primary"
              />
            </div>
            <div className="mt-8">
              <textarea
                name="message"
                id=""
                placeholder="Enter Message"
                className="w-full py-16 px-3 border border-primary/20 bg-secondary/20 outline-primary"
              ></textarea>
            </div>
            <div className="mt-6">
              <button className="px-5 py-3 bg-primary text-white">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
