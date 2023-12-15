import {LinkButton} from "../../components/link-button/link-button";
import {Container} from "../../components/container/container";
import {Button} from "../../components/button/button";
import "./scan-page.css"
import {useEffect, useState} from "react";

type Assembly = {
    id: number,
    cpu: string,
    gpu: string,
    op: string,
    motherboard: string,
    hdd: string
}

export function ScanPage() {
    const [assembly, setAssembly] = useState<Assembly>();

   useEffect(() => {
       async function fetchData(){
           let request = new Request("/getLastAssembly");
           let response = await fetch(request);
           let result:Assembly = await response.json();

           setAssembly(result);
       }

       if(assembly == undefined){
           fetchData();
       }
   })

    return (
        <>
            <div>
                <LinkButton href={"/app/"}>На главную</LinkButton>
            </div>
            <Container className={"assemble_page__container"}>
                <div className={"assemble_page__section a6 xs12 s12"}>
                    <h1>Процессор:</h1>
                    <input className={"scan-page__input__field"} value={assembly?.cpu}/>
                    <h1>Видеокарта:</h1>
                    <input className={"scan-page__input__field"} value={assembly?.gpu}/>
                    <h1>HDD:</h1>
                    <input className={"scan-page__input__field"} value={assembly?.hdd}/>
                </div>
                <div className={"assemble_page__section a6 xs12 s12"}>
                    <h1>Материнская плата:</h1>
                    <input className={"scan-page__input__field"} value={assembly?.motherboard}/>
                    <h1>Оперативная память:</h1>
                    <input className={"scan-page__input__field"} value={assembly?.op}/>
                </div>
            </Container>
            <div className={"isolated center"}>
                <Button>Собрать</Button>
            </div>
        </>
    )
}