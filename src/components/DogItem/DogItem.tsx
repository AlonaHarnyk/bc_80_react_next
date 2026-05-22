import type { Dog } from "../../types"

interface DogItemProps{
    dog: Dog
}

export default function DogItem({ dog:{name, age, breed, avatar} }:DogItemProps) {
    return (<>
        <img src={avatar} alt={name} />
        <h2>{name}</h2>
        <p> Age:{age}</p>
        <p>{breed}</p>
    </>
    )
}