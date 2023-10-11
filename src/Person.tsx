interface Props {
    name: string;
    age: number;
    email: string;
    friends: string[];
    country: Country;
}


export enum Country {
    Country1 = "Dapitan",
    Country2 = "Dipolog",
    Country3 = "Polanco"
}

export const Person = (props:Props)=> {
    return(
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.email}</h1>
            <h1>{props.friends.map((friend:string) => 
              (
                   <p>{friend}</p>
            ))}</h1>

            <h1>{props.country}</h1>
        </div>
    )
}