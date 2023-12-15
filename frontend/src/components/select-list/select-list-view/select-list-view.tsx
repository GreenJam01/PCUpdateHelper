import "./select-list-view.css"
import {OptionList} from "../select-list";
import {useState} from "react";
import {Button} from "../../button/button";

// export function SelectListView(
//     {options, selectedItem, setSelectedItem}: {
//         options: OptionList,
//         selectedItem: number,
//         setSelectedItem: (a: number)=>void
//     }){
//
//     const [activity, setActivity] = useState(false);
//
//     let listVisibility;
//     if(activity){
//         listVisibility = "select-list__view__list--active";
//     } else {
//         listVisibility = "select-list__view__list--inactive"
//     }
//
//     return(
//         <div className={"selected-list__view"}>
//             <Button
//                 className={"selected-list__view__label wide"}
//                 clickListener={(e) => {activity?e.currentTarget.blur():setActivity(!activity)}}
//                 onBlur={()=>{
//                     setTimeout(()=>{setActivity(!activity)}, 10);
//                 }}
//             >
//                 <span>{options.find(x=>x.value===selectedItem)?.label}</span> <span>↓</span>
//             </Button>
//
//             <div className={"select-list__view__list " + listVisibility}>
//                 {options.map(x=><Button
//                     filling={x.value}
//                     className={"select-list__view__list__item"}
//                     clickListener={(e,f)=>{setSelectedItem(f); setActivity(!activity)}}
//                 >{x.label}</Button>)}
//             </div>
//         </div>
//     )
// }

export function SelectListView(
    {options, selectedItem, setSelectedItem}: {
        options: OptionList,
        selectedItem: number,
        setSelectedItem: (a: number)=>void
    }){

    const [activity, setActivity] = useState(false);

    let listVisibility;
    if(activity){
        listVisibility = "select-list__view__list--active";
    } else {
        listVisibility = "select-list__view__list--inactive"
    }

    return(
        <div className={"selected-list__view"}>
            <div className={"selected-list__view__btn"}>
                <span>{options.find(x=>x.value===selectedItem)?.label}</span> <span>↓</span>
            </div>
            <div className={"selected-list__view__content"}>
                {options.map((x)=><Button
                    filling={x.value}
                    className={"select-list__view__list__item"}
                    clickListener={(e,f)=>{setSelectedItem(f); setActivity(!activity)}}
                >{x.label}</Button>)}
            </div>
        </div>
    )
}