type menu = {
    setMenu:any
}
const Menubar = (props:menu) => {
   props.setMenu
  return (
    <div className="flex shadow-sm h-10 p-2 mt-2">
      <h1 onClick={()=>props?.setMenu("Shirt")} className="ml-96 cursor-pointer  ">Shirt</h1>
      <h1 onClick={()=>props?.setMenu("Jacket")} className="ml-5 cursor-pointer">Jacket</h1>
      <h1 onClick={()=>props?.setMenu("Phones")} className="ml-5 cursor-pointer">Mobile Phones</h1>
      <h1 onClick={()=>props?.setMenu("House")} className="ml-5 cursor-pointer">For Sale: Houses & Apartments</h1>
      <h1 onClick={()=>props?.setMenu("Scooters")} className="ml-5 cursor-pointer">Scooters</h1>
      <h1 onClick={()=>props?.setMenu("Commercial")} className="ml-5 cursor-pointer">Commercial & Other Vehicles</h1>
      <h1 onClick={()=>props?.setMenu("Apartments")} className="ml-5 cursor-pointer">For Rent: Houses & Apartments
      </h1>
    </div>
  )
}

export default Menubar
