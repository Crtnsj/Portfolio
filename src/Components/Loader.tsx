const Loader = () => {
  const text = "Bienvenue sur mon porfolio";
  const letters = text.split("");

  return (
    <div>
      <div className="loadAnim">
        <h1 className="loadAnim__text">
          {letters.map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </h1>

        <h2 className="loadAnim__name">Corentin San Juan</h2>
      </div>
      <div></div>
    </div>
  );
};

export default Loader;
