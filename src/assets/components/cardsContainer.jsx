function CardsContainer({ data }) {
  return (
    <div className="cards  h-60 w-80 overflow-hidden bg-red-400 flex flex-wrap items-center justify-center shadow-lg rounded-md">
      <h1 className="cardHeading p-4 text-white  text-2xl capitalize ">
        {data.text}
      </h1>
      <div className="cardImg overflow-hidden border border-green-600 w-full h-full">
        <img className="  w-full h-full" src={data.url} alt="" />
      </div>
    </div>
  );
}
export default CardsContainer;
