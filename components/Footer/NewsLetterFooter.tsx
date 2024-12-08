export default function NewsletterSection() {
  return (
    <div className="w-full max-w-[1169px] mx-auto text-center mb-12 flex flex-col sm:flex-row sm:gap-[271px]">
      <div className="flex flex-col mb-6 sm:mb-0">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-[#FF9F0D]">Still</span> You Need Our Support?
        </h2>
        <p className="mb-6">Don&apos;t wait, make a smart & logical quote here. It&apos;s pretty easy.</p>
      </div>

      <form className="w-full max-w-[459px] h-[55.86px] flex mx-auto sm:flex-row">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="flex-grow bg-[#FF9F0D] text-white placeholder-white placeholder-opacity-60 px-4 py-2 rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          className="bg-white text-[#FF9F0D] px-6 py-2 rounded-r-md font-semibold hover:bg-[#FF9F0D] hover:text-white transition duration-300"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  )
}
