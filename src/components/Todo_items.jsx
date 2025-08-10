
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const Todo_items = (props)=>{
    return(
        <div className='ITEM flex justify-between items-center h-6 px-8 my-5 mx-7  rounded-full'>
            <div className='flex items-center gap-7'>
                <img className='h-5 cursor-pointer' src={not_tick}  />
                <p className='text-slate-700 text-xl'>{props.text}</p>
            </div>
    
                <img className='h-4 cursor-pointer' src={delete_icon}  />
        
        </div>
    )
}

export default Todo_items