import PropTypes from "prop-types";

const NumberInput = ({ label, name, value, onChange }) => {
  const styles = {
    container: {
      background: `linear-gradient(to right, #4facfe, #00f2fe)`,
      margin: `10px 20px`,
      width: `300px`,
      boxShadow: `1px 1px 1px 1px rgb(0, 0, 0, 0.5)`,
      fontFamily: `Geneva`,
    },
    input: {
      margin: `10px 20px`,
      width: `150px`,
      borderRadius: `12px`,
      fontFamily: `Geneva`,
      color: `#000`,
      outline: "none",
      border: "none",
      WebkitAppearance: "none",
      MozAppearance: "textfield", // Firefox
    },
  };

  return (
    <>
      {/* ✅ Esto sí permite eliminar las flechas en Chrome, Edge, Opera, Safari */}
      <style>{`
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      `}</style>

      <div style={styles.container}>
        <label>
          {label}:{" "}
          <input
            type="number"
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.name, e.target.value)}
            style={styles.input}
          />
        </label>
      </div>
    </>
  );
};

NumberInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default NumberInput;
