import {LinkButton} from "../../components/link-button/link-button";
import {Container} from "../../components/container/container";

export function  UpgradePage(){
    return(
        <>
            <div className={"a12"}>
                <LinkButton href={"/app/"}>На главную</LinkButton>
            </div>
            <Container>
                <div className={"a12 xs12 s12 center"}><h1>Что-то про ПК</h1></div>
                <div className={"a6 xs12 s12 center"}>
                    <h1>Сканировать ПК</h1>
                    <LinkButton href={"/app/scan"}>СКАНИРОВАТЬ!!!</LinkButton>
                </div>
                <div className={"a6 xs12 s12 center"}>
                    <h1>Собрать новый</h1>
                    <LinkButton href={"/app/create"}>СОБРАТЬ!!!</LinkButton>
                </div>
            </Container>
        </>
    )
}