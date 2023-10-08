// export default function Todo({task, isDone}){

//     return (
//         <li>Task: {task}</li>
//     )
// }



// conditional Rendering 1----------------------------------------------
// export default function Todo({task, isDone}){

//     if(isDone === true){
//         return <li>Finished {task}</li>
//     }
//     else{
//         return <li>Work on:</li>
//     }
// }



// conditional Rendering 2----------------------------------------------

// export default function Todo({task, isDone}){

//     if(isDone === true){
//         return <li>Finished {task}</li>
//     }
//     return <li>Work on:</li>
// }



// Conditional rendering 3: ternary Operator----------------------------------------------

// export default function Todo({task,isDOne}){
//     return (
//         <li>{isDOne ? 'finished': 'work on'}: {task}</li>
//     )
// }


// Conditional rendering 4 ------------------------
// export default function Todo({task,isDone}){
//     return (
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }



// Conditional rendering 5 ------------------------
export default function Todo({task,isDone}){
    return (
        <li>{task} {isDone || ': Do It'}</li>
    )
}






















