import "./select-list.css"
import {useState} from "react";
import {SelectListView} from "./select-list-view/select-list-view";

export type OptionList = {value: number, label: string}[]

export function SelectList({options, className}: {options: OptionList, className?: string}){
    const [selectedItem, setSelectedItem] = useState(1);
    return(
        <div className={"select-list"}>
            <select className={"select-list__select"}>
                {options.map(x=>
                    <option value={x.value} selected={x.value === selectedItem}>
                        {x.label}
                    </option>)}
            </select>
            <SelectListView selectedItem={selectedItem} setSelectedItem={setSelectedItem} options={options}/>
        </div>
    )
}