import React from "react";
import PropTypes from "prop-types";

const ResultadoOutput = ({operacion, resultado})=>{
    return(
        <div>
            <label>{operacion}: {resultado}</label>
        </div>
    )
}

ResultadoOutput.propTypes = {
    operacion: PropTypes.string.isRequired,
    resultado: PropTypes.number
}

export default ResultadoOutput;