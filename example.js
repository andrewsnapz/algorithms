function useState(initialValue) {
    var _val = initialValue;

    function state() {
        return _val;
    };

    function setState(newVal) {
        _val = newVal;
    };

    return [state, setState]; 
};

const [count, setCount] = useState(0);

console.log(count)