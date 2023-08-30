import Button from "./Button";
const Buttonlist=()=>{
    const buttonlist=["All", "National Institue Of Technology", "computer programming", "Music", "Mixes", "Physics",  "Tamil cinema"];

    return (
        
        buttonlist.map((btn)=>{return <Button name={btn}/>})
       
    )
}

export default Buttonlist;