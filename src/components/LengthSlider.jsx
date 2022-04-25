

function LengthSlider() {
  const handleChange = ({ target: { value } }) => {
    console.log(value)
  }

  return (
    <section>
      <p>LENGTH: 4</p>
      <div className="slide-container">
        <input
          type="range"
          min="4"
          max="32"
          onChange={handleChange}
        // value="4"
        />
      </div>
    </section>
  );
}

export default LengthSlider;