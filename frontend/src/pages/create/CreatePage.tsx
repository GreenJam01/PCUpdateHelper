import {LinkButton} from "../../components/link-button/link-button";
import {Container} from "../../components/container/container";
import {SelectList} from "../../components/select-list/select-list";
import {hdd, motherboards, processors, videoCards, RAMs} from "../../data/appointment-list";
import {Button} from "../../components/button/button";

export function CreatePage(){
    return(
        <>
            <div>
                <LinkButton href={"/app/"}>На главную</LinkButton>
            </div>
            <Container className={"assemble_page__container"}>
                <div className={"assemble_page__section a6 xs12 s12"}>
                    <h1>Процессор:</h1>
                    <SelectList options={processors}/>
                    <h1>Видеокарта:</h1>
                    <SelectList options={videoCards}/>
                    <h1>HDD:</h1>
                    <SelectList options={hdd}/>
                </div>
                <div className={"assemble_page__section a6 xs12 s12"}>
                    <h1>Материнская плата:</h1>
                    <SelectList options={motherboards}/>
                    <h1>Оперативная память:</h1>
                    <SelectList options={RAMs}/>
                </div>
            </Container>
            <div className={"isolated center"}>
                <Button>Собрать</Button>
            </div>
        </>
    )
}