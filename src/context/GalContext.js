import { createContext, useState } from "react"

export const GalContext = createContext();

export const GalProvider = ({children}) => {
    const [kutyaLISTA, setKutyaLISTA] = useState([
        {
            src: "./kepek/kutya1.jpg",
            alt: "Kiskutyák kék hátteren"
        },
        {
            src: "./kepek/kutya2.jpg",
            alt: "Fehér kiskutyák"
        },
        {
            src: "./kepek/kutya3.jpg",
            alt: "Kiskutyák a kanapén"
        },
        {
            src: "./kepek/kutya4.jpg",
            alt: "Kutyák egy ládában"
        }
    ])

    function kattKicsi(adat) {
        const slista = [...kutyaLISTA]
        const k = adat
    }

    function kattNyil(adat) {

    }

    return <GalContext.Provider value = {{kutyaLISTA, kattKicsi, kattNyil}}>
        {children}
    </GalContext.Provider>
}