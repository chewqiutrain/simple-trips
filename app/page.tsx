import Image from "next/image";
import MyTable from "@/app/my_table";
import { TableUsingGrid, MyHorzDivider, MyVertDivider, MyBar, MockHistogram, MyBarWithLegend, MockHistogramWithX } from "@/app/my_table";
import { NavButtform } from "./ui/nav-links";

export default function Home() {
  // const table = MyTable();

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-8">
      <div className="bg-blue-200 h-32 w-32 rounded-md text-yellow-200 flex flex-col items-center place-content-center">
        <NavButtform/>
      </div>
      <MyHorzDivider/>
      <div className="flex bg-red-500 items-center justify-center min-w-full space-x-10 flex-row">
        <MyTable/>
        <MyTable/>
      </div>
      <MyHorzDivider/>
      <div className="flex flex-row bg-red-500 min-w-full justify-around p-8">
        <TableUsingGrid/>
        <TableUsingGrid/>
      </div>
      <MyHorzDivider/>
      <div className="flex flex-row bg-orange-200 min-w-full min-h-screen max-h-screen p-8  ">
        <div className="flex flex-row bg-orange-500 w-1/2 min-h-24 max-h-screen p-8 justify-left space-x-2 items-end rounded-md">
          <MyBar height="55%"/>
          <MyBar height="20%"/>
          <MyBarWithLegend legend="2025-01-02" height="25%"/>
          {/* <MyBar h={32}/>
          <MyBar h={64}/>
          <MyBar h={96}/> */}
        </div>
        <div className="bg-black min-h-full w-32"></div>
        <MockHistogramWithX/>
      </div>
    </main>
  );
}
