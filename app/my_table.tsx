import { generate } from "random-words"
import { mockDf, MockDfTuples } from "./lib/data";

function getTableData(nrow: number, ncol: number){
    let table = Array();
    for (let row = 0; row < nrow; row++) {
        let rowVals: string[] = Array();
        for (let col = 0; col < ncol; col ++) {
            rowVals.push(`This is row: ${row} col: ${col}`);
        } 
        table.push(rowVals);
    }
    return table;
}


function Cell({ val }: { val: any}) {
    return (
        <p className="rounded-sm bg-cyan-950 min-h-8 min-w-8 text-center align-bottom display-block p-2" key={val}>
            {val}
        </p>
    )
}

function Row({ rowVals, key}: { rowVals: any[], key: string}) {
    console.log(rowVals);
    console.log(typeof rowVals);
    return (
        <div className="flex bg-orange-400 flex-row space-x-5 justify-between rounded-md" key={key}>
            {/* eslint-disable-next-line */}
            {rowVals.map((v) => <Cell val={v}/>)}
        </div>
    )
}

export default function MyTable() {
    const nrow = 3
    const ncol = 5
    const data = getTableData(nrow, ncol);
    console.log("Printing data -----\n");
    console.log(data);
    // data.map(row => console.log(`123 ${row} | ${typeof row}`));

    return (
        <div className="flex bg-lime-400 flex-col space-y-5 rounded-md">
            {data.map((row) => <Row rowVals={Array.from(row)} key="123"/>)}
        </div>
    )
}

export function TableUsingGrid() {
    const nrow = 3;
    const ncol = 5;
    return (
        <div className="grid grid-rows-2 grid-flow-col gap-4 justify-items-center bg-orange-500 content-center w-32 h-32">
            <div className="bg-yellow-300 text-stone-950 hover:overflow-x-auto overflow-hidden max-w-8 p-2">01</div>
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">02</div>
            <div className="bg-yellow-300 text-stone-950 rounded-lg items-center justify-center flex">03</div>
            <div className="bg-yellow-300 text-stone-950 max-w-8 p2 flex items-center justify-center">04</div>
        </div>
    )
}

export function MyHorzDivider() {
    return (
        <div className="bg-black min-w-full h-8"></div>
    )
}

export function MyThinHorzDivider() {
    return (
        <div className="bg-gray-500 min-w-full h-0.5 rounded-lg"></div>
    )
}


// why does this only work for w=32?
export function MyVertDivider({ w=8 }: { w?: number }) {
    console.log(`w: ${w}`);
    return (
        <div className={`bg-black min-h-full w-${w}`} key={`my-vert-div-${w}`}></div>
    )
}

export function MyBar({ height }: { height: string }) {
    return (
        <div key={`my-bar-h-${height}`} className={`bg-purple-500 w-12 rounded-md text-xs items-center flex place-content-center`} style={{ height }}>
            <span className="text-xs">h={height}</span>
        </div>
    )
}
export const GLOBAL_DEBUG = false;

export function  MyBarWithLegend({ legend, height}:{ legend: string, height: string}){
    const debugBackgroundY = GLOBAL_DEBUG ? "bg-purple-200" : ""
    const debugBackgroundX = GLOBAL_DEBUG ? "bg-purple-300" : ""
    return (
        <div className={`flex flex-col-reverse ${debugBackgroundY} w-12 h-full items-end`}>
            <div className={`flex flex-col w-12 ${debugBackgroundX} -rotate-45 items-end place-items-center`}>
                <span className="text-xs text-black" style={{writingMode: 'vertical-lr'}}>{legend}</span>
            </div>
            <MyBar height={height}/>
        </div>
    )
}

export function MockHistogram() {
    return (
        <div className="flex flex-row bg-orange-500 w-1/2 min-h-24 max-h-screen p-8 justify-left space-x-2 items-end rounded-md">
            {mockDf.salesPositive.map((salesP) => {
                // eslint-disable-next-line
                return <MyBar height={`${salesP.toString()}%`}/>
            }
            )}
        </div>
    )   
}

export function MockHistogramWithX() {
    const df = MockDfTuples();
    console.log(typeof df);
    let legend: string;
    let v: string;
    return (
        <div className="flex flex-row bg-orange-500 w-1/2 min-h-24 max-h-screen p-8 justify-left space-x-2 items-end rounded-md">
            {
                df.map((x) => {
                    legend = x[0];
                    v = x[1];
                    
                    return <MyBarWithLegend legend={legend} height={`${v}%`} />
                })
            }
        </div>
    )       
}