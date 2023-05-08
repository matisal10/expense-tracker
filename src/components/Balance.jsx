import { useGlobalState } from "../context/GlobalState"



export default function Balance() {

    const data = useGlobalState()

    return (
        <div> 
            <h1>Balance</h1>
            {/* <div>{JSON.stringify(data)}</div> */}
        </div>
    )
}
