import {
    useState,
    useEffect,
} from 'react';
const useTextInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    useEffect(() => {
        setValue(initialValue)
    },[initialValue])
    const onChange = (event) => {
        setValue(event.target.value);
    };
    return {
        value,
        onChange,
    };
    
}
export default useTextInput;