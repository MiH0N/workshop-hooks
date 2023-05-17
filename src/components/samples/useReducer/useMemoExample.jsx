import {useState , useCallback} from "react";


export default function useMemoExamples () {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    // const doubleNumber = slowFunction(number)
    const doubleNumber = useCallback( () => {
        return slowFunction(number)
    }, [number])
    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }


    function slowFunction(num) {
        // let b = 0;
        // for(let i = 0 ; i<=1000000000; i++) {
        //     b = 1;
        // }
        return num*2;
    }

    return(
        <div>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}></input>
            <button onClick={() => setDark(prevDark => !prevDark)}>Change theme</button>
            <div style={themeStyles}>
                {doubleNumber}
            </div>
        </div>
    )
}