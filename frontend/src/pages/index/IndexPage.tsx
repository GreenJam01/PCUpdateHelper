import {Container} from "../../components/container/container";
import {LinkButton} from "../../components/link-button/link-button";

export function IndexPage(){
    return(
        <Container>
            <div className={"a12 center"}><h1>Что-то про ПК</h1></div>
            <div className={"a6 xs12 s12 center"}>
                <h1>Собрать новый ПК</h1>
                <LinkButton href={"/app/assemble"}>СОБРАТЬ!!!</LinkButton>
            </div>
            <div className={"a6 xs12 s12 center"}>
                <h1>Улучшить старый ПК</h1>
                <LinkButton href={"/app/upgrade"}>УЛУЧШИТЬ!!!</LinkButton>
            </div>
        </Container>
    )
}