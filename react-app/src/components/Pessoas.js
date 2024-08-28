function Pessoas({name, idade, profissao, foto}){
    return(
        <div>
            <img src={foto} alt={name}/>
            <h2>Nome: {name}</h2>
            <p>Idade: {idade}</p>
            <p>profissão: {profissao}</p>
        </div>
    )
}

export default Pessoas;