


const commentdata=[
    {
        name:"sachin", 
        text:"lorem ipsum dolor sit", 
        replies:[{
            name:"sachin", 
            text:"lorem ipsum dolor sit", 
            replies:[{
                name:"sachin", 
                text:"lorem ipsum dolor sit", 
                replies:[{
                    name:"sachin", 
                    text:"lorem ipsum dolor sit", 
                    replies:[]
                }]
            }]
        }]
    }, 
    {
        name:"suraj", 
        text:"lorem ipsum dolor sit", 
        replies:[{
            name:"sachin", 
            text:"lorem ipsum dolor sit", 
            replies:[{
                name:"sachin", 
                text:"lorem ipsum dolor sit", 
                replies:[]
            }]
        }]
    }, 

    {
        name:"prasad", 
        text:"lorem ipsum dolor sit", 
        replies:[]
    }
]

const Comment=({data})=>{
    const {name, text, replies}=data;
    return (
        <div className="flex flex-row m-3 bg-gray-100 gap-2">
        <img alt="user ka photo" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" 
            className="w-10 h-10"
        />
        <div className="flex flex-col">
        <div>{name}</div>
        
        <p>{text}</p>
        </div>
        </div>
    )
}

const Commentslist=({comments})=>{
    return (
      
         comments.map((comment)=>{
            return (
            <div>
            <Comment data={comment}/>
            <div className="ml-10 border border-x-blue-500">
            <Commentslist comments={comment.replies}/>
            </div>
            </div> 
            )
            
         })       
      
      
        
    )
}



const Commentsection=()=>{
    return (
        <div className="p-3">
         <div className="font-bold">Comments</div>
         <Commentslist comments={commentdata} />
        </div>
    )
}

export default Commentsection;