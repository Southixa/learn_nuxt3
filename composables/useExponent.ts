export const useExponent = () => {
    const exponent = useState('exponent', ()=> 2);

    const getExponent = () => {
        exponent.value *= exponent.value;
    }

    return {
        exponent,
        getExponent
    }
}