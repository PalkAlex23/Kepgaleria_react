import KisKep from "./KisKep.js"

export default function Galeria(props) {
    return
    (
        <>
            {
                props.lista.map((elem, index) => {
                    return (
                        <KisKep kep={elem} index={index} key={index} />
                    )
                })
            }
        </>
    )
}