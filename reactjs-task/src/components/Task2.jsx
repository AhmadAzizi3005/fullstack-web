import React, {useEffect, useState} from "react";

export default function Task2(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log(`You clickes${count} times`);
        return()=>{
            console.log("clean up")
        };
    },[count])
    const namaHandle =()=>{
        setCount(count+1);
    };
    return(
        <div className="flex flex-col justify-center items-center text-emerald-800">
            <p>Count: {count}</p>
            <button className="bg-slate-200 rounded-md p-2" onClick={namaHandle}>Tambah</button>
        </div>
    )
}