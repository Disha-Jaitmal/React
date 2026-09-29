import "./Card.css"
import Price from "./Price"
import laptop from "./assets/laptop.png"
import mobile from "./assets/mobile.png"
import ps from "./assets/ps5.png"
import fitbit from "./assets/fitbit.png"
export default function Card({title,idx}){
let im =[laptop,mobile,ps,fitbit]
let decp1 = ["Best Laptop in the World","Best Mobile in the World","Best PS5 in the World","Best FitBit in the World"]
let decp2 =["With Amazing Features","With Amazing Camera","With Amazing Games","With Amazing Tech"]
let old =[80000,50000,40000,15000]
let neww =[70000,40000,30000,10000]
return <div className="card">
        <h2>{title}</h2>
        <img src={im[idx]}></img>
        <p>{decp1[idx]}</p>
        <p>{decp2[idx]}</p>
        <Price oldp={old[idx]} newwp={neww[idx]}/>
    </div>
}