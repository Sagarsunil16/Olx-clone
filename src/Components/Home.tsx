import { Link } from "react-router-dom"

type Product = {
    product:any,
    search:any,
    menu:any
}


console.log()
const Home = (props:Product) => {
    console.log(props,"props")
  return (
    <div className="grid grid-cols-4 p-5">
      {props?.product?.filter((data:any)=>data?.title.toLowerCase()?.includes(props?.search?props?.search.toLowerCase():props?.menu.toLowerCase())).map((data:any,index:any)=>{
        return <Link to='/details/:{data}' state={{data:data}}><div key={index} className="border border-spacing-1 p-2 ml-3 mt-3">
        <img src={data.image} alt="" className="w-60 h-48 " />
        <h1 className="font-bold text-xl">₹ {data?.price}</h1>
        <h1 className="">{data?.title}</h1>
        <h1>{data?.category}</h1>
        </div>
        </Link>
      })}
    </div>
  )
}

export default Home
