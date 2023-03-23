

export default function PokemonDataView  ({pokemon: {sprites, name, stats}}){
    return(
        
        <div>
                        
            <img src={sprites.other['official-artwork'].front_default} alt={name} />
            <p>{name}</p>

            <ul>
                {stats.map(entery => (
                    <li key={entery.stat.name}>
                        {entery.stat.name}:{entery.base_stat}
                    </li>
                ))}
               
            </ul>
        </div>
              
        
);
}