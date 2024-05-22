'use client';

import { NavHome } from "../ui/nav-links";
import { MyHorzDivider, MyVertDivider, MyThinHorzDivider} from "../my_table";
import { useState } from "react";



export default function Page() {
    const myDict: { [key: string]: number } = {
        'key1': 123,
        'key2': 456,
    };
    const [counter, setCounter] = useState(0);
    function increment() {
        console.log(`incrementing counter: ${counter} `);
        setCounter(counter+1);
    }

    function decrement() {
        console.log(`decrementing counter: ${counter} `);
        setCounter(counter-1);
    }

    const myVal = myDict["key1"];

    return (
    <main className="flex min-h-screen flex-col items-center justify-around p-4">
        <div className="bg-blue-200 h-32 w-32 rounded-md text-yellow-200 flex flex-col items-center place-content-center">
            <NavHome/>
        </div>
        <MyHorzDivider/>
        <div className="bg-orange-200 flex flex-row min-h-screen max-h-screen min-w-full">
            <div className="bg-orange-400 text-black">
                myVal IS: {myVal}
            </div>
            <MyVertDivider w={8}/>
            <div className={`bg-orange-800 min-h-full w-8`}></div>
            <div className={`bg-orange-900 min-h-full w-16`}></div>
            <div className="bg-orange-400 text-black min-w-64">
                <div className="bg-purple-100">Counter: {counter}</div>
                <MyThinHorzDivider/>
                <div className="bg-purple-300 flex justify-center">
                    <button onClick={increment} className="min-w-full min-h-full">Increment</button>
                </div>
                <MyThinHorzDivider/>
                <div className="bg-purple-300 flex justify-center">
                    <button onClick={decrement} className="min-w-full min-h-full">Decrement</button>
                </div>
            </div>
        </div>
        

    </main>
    )
}