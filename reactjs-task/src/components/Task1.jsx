import Task2 from "./Task2";


export default function Task1(props){
    return(
        <div className="h-screen flex flex-col justify-center items-center">
             <div className="w-64 h-64 border border-emerald-400 rounded-lg flex flex-col justify-between items-center p-4 text-emerald-800">
                <img src={props.img} alt="gambar" />
                <p>{props.title}</p> 
            </div>  
            <Task2/> 
        </div>
    )
}