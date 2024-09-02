function Intro() {
  return (
    <div className="flex flex-wrap items-center w-full bg-black ">
      <div
        className="bg-red-400 rounded-full overflow-hidden flex justify-center items-center"
        style={{ width: "200px", height: "200px" }}
      >
        <img
          src="./src/assets/0ebd5972-fa46-4e32-986c-e44d11f7d750.png"
          className="w-full h-full"
          alt=""
        />
      </div>
    </div>
  );
}

export default Intro;
