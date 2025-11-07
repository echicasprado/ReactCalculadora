import { useState } from "react";
import NumberInput from "./NumberInput";
import ResultadoOutput from "./ResultadoOutput";

const Calculadora = () => {
    const [numeros, setNumeros] = useState({num1:'', num2:''});

    const handleNumeroChange = (nombreInput, valor) => {
        setNumeros({
            ...numeros,
            [nombreInput]: valor
        });
    };

    const resultado = parseFloat(numeros.num1 || 0) + parseFloat(numeros.num2 || 0);

    return(
        <>
            <NumberInput label="Número 1" name="num1" value={numeros.num1} onChange={handleNumeroChange} />
            <NumberInput label="Número 2" name="num2" value={numeros.num2} onChange={handleNumeroChange} />
            <ResultadoOutput operacion="suma" resultado={resultado} />
        </>
    )
};

export default Calculadora;