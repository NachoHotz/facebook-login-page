import faceLogo from './faceLogo.svg';

function App() {
  return (
    <div className="flex flex-col items-center justify-between bg-[#f0f2f5] h-screen">
      <div className="flex gap-x-28 mt-36">
        <div className="w-[35rem]">
          <img
            src={faceLogo}
            alt="face logo"
            className="ml-5 h-[7rem] w-[20rem]"
          />
          <p className="ml-[3rem] text-3xl">
            Connect with friends and the world around you on Facebook.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col bg-white p-4 rounded-lg shadow-lg drop-shadow-md">
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                className="ring-1 ring-slate-300 focus:ring focus:outline-double focus:outline-[#1877f2] w-[22rem] h-[3rem] rounded-md pl-3"
                placeholder="Email or phone number"
              />
              <input
                type="password"
                className="ring-1 ring-slate-300 focus:ring focus:outline-double focus:outline-[#1877f2] w-[22rem] h-[3rem] rounded-md pl-3"
                placeholder="Password"
              />
            </div>
            <div className="flex flex-col items-center justify-center pt-5">
              <button className="text-center text-xl w-full rounded-md text-white font-semibold py-2 bg-[#1877f2] hover:bg-blue-600 transition ease-in-out duration-300">
                Log In
              </button>
              <div className="py-3">
                <span className="text-[#1877f2] text-sm hover:cursor-pointer hover:underline">
                  Forgot password?
                </span>
              </div>
            </div>
            <hr />
            <div className="flex justify-center mt-7">
              <button className="bg-[#42b72a] hover:bg-green-600 transition ease-in-out duration-300 text-center text-white text-lg font-bold py-2 px-4 rounded-md">
                Create new account
              </button>
            </div>
          </div>
          <span className="text-center text-sm mt-7">
            <a href="#" className="font-bold hover:underline">
              Create a page
            </a>{' '}
            for a celebrity, brand or business.
          </span>
        </div>
      </div>
      <div className="bg-white w-full">
        <div className="p-3 flex items-center justify-center">
          <span>English (US) Español Portugués (Brazil)</span>
        </div>
      </div>
    </div>
  );
}

export default App;
