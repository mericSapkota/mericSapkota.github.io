import LikeButton from "./LikeButton";
const fruits=[
    {
        id:1,
        name:"Apple",
        color:"red"
    },
    {
        id:2,
        name:"Banana",
        color:"Yellow"
    },
    {
        id:3,
        name:"Guava",
        color:"Green"
    },
    {
        id:4,
        name:"Orange",
        color:"Orange"
    }
];

export default function FruitList(){
    const fruitLists = fruits.map((fruit,i)=>(
       <div key={fruit.id} className="grid grid-cols-2 w-1/4">
        <li  style={{color: i%2 ==0? "red":"magenta"} }>{fruit.name}</li>
        <LikeButton/>
       </div>

    ));
    return(
       
            <ul>{fruitLists}</ul>
          
        
    )
    
}