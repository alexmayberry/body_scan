// import * as d3 from "d3";
import * as React from 'react';

import Header from "./Header";
import Filter from './Filter';


export default function SideBar() {
    
    return (
        <div className='fixed z-10 w-screen md:w-1/3 lg:w-1/4 h-full overflow-auto p-5 border-r-2 border-white'>
        <Header ></Header>
        <Filter/>
        <div className='h-1/2 bg-white text-black' >test</div>
        <div className='h-96 bg-slate-500 text-black' >test</div>

        </div>
    )
}