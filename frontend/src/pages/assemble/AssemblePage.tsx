import {Container} from "../../components/container/container";
import {LinkButton} from "../../components/link-button/link-button";
import {PriceInput} from "../../components/price-input/price-input";
import "./assemble.css"
import {SelectList} from "../../components/select-list/select-list";
import {appointmentList} from "../../data/appointment-list";
import {Button} from "../../components/button/button";

export function AssemblePage(){
    return(
        <>
            <div>
                <LinkButton href={"/app/"}>На главную</LinkButton>
            </div>
            <Container className={"assemble_page__container"}>
                <div className={"assemble_page__section a6 xs12 s12"}>
                    <h1>Цена:</h1>
                    <PriceInput className={"wide"}  label={"От:"}/>
                    <PriceInput className={"wide"} label={"До:"}/>
                    <h1>Процессор:</h1>
                    <div className={"assemble_page__radio-button"}>
                        <input name={"1"} id={"radio-AMD"} type={"radio"}/>
                        <label htmlFor={"radio-AMD"} radioGroup={"1"}>AMD</label>
                    </div>
                    <div className={"assemble_page__radio-button"}>
                        <input name={"1"} id={"radio-Intel"} type={"radio"}/>
                        <label htmlFor={"radio-Intel"}>Intel</label>
                    </div>
                </div>
                <div className={"assemble_page__section a6 xs12 s12"}>
                    <h1>Назначение</h1>
                    <SelectList  options={appointmentList}/>
                </div>
            </Container>
            <div className={"isolated center"}>
                <Button>Собрать</Button>
            </div>
        </>
    )
}