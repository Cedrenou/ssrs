import styled from '@emotion/styled'
import {useEffect, useState} from 'react'

export default function Concours() {

    const [contestants, setContestants] = useState([])

    // Fetch data from the API and set it to the contestants state
    useEffect(() => {
        fetch('https://www.reseau-ecna.com/wp-json/wp/v2/contestants')
            .then(response => response.json())
            .then(data => setContestants(data))
    }, [])

    // @ts-ignore
    const FilterContestants = ({contestants}) => {
        // @ts-ignore
        contestants.sort((a, b) => b.votes_count - a.votes_count)
        return (
            <FlexRow>
                {contestants.map((contestant: any, index: number) => (
                    <Border key={contestant.id}>
                        <h3>Position #{index + 1}</h3>
                        <h2>{contestant.title.rendered}</h2>
                        <p>Vote pour : <strong>{contestant.votes_count}</strong></p>
                    </Border>
                ))}
            </FlexRow>
        )
    }

    return (
        <>
            <h1>Resultat concours</h1>
            <FilterContestants contestants={contestants}/>
        </>
    )
}

const Border = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
`
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`