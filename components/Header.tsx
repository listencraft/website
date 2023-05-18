const Header = () => {
  return (
    <header className="px-3 py-7 flex justify-between items-center bg-bgHeader md:px-10">
      <div className="flex justify-between items-center self-center">
        <div className="logo-circle w-5 h-5 rounded-full"></div>
        <h1 className="ml-2 text-3xl text-white font-semibold">Listencraft</h1>
      </div>
      <button className="text-white bg-btnColor1 py-1 px-4 rounded-3xl transition ease-in-out duration-500 hover:bg-btnColorHover 2xl:text-xl">
        Contact us
      </button>
    </header>
  );
};

export default Header;
