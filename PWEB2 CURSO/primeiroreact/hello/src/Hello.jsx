import { useState } from "react"

function Hello({name = "World", children}) {
const [idade, setIdade] = useState(18)
const [occ, setOcc] = useState("Professor")
const [cpf, setCpf] = useState("000.000.000-00")

    return (
        <>
        <h1>Hello, {name}!</h1>
        <p>Sua idade é: {idade}</p>
        <p>Sua profissão é: {occ}</p>
        <p>Seu cpf é: {cpf}</p>
        <button
            onClick={() => setIdade(i => ++i)}
        >
            + 01 ano
            </button>    
            <input type="text" value = {occ} onChange={(e) => setOcc(e.target.value)} />
            <input type="text" value = {cpf} onChange={(e) => setCpf(e.target.value)} />
        </>
    )
}

export default Hello