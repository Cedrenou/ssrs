import React from 'react'
import {Card, Image} from 'antd'
import styled from '@emotion/styled'

const MockCategories = [
    {
        id: 1,
        name: 'Casques',
        slug: 'casques',
        image: 'casque',
    },
    {
        id: 2,
        name: 'Blouson',
        slug: 'blouson',
        image: '',
    },
    {
        id: 3,
        name: 'Pantalon',
        slug: 'pantalon',
        image: '',
    }
]
export default function Home() {
    return (
        <>
            <h1>Les catégories</h1>
            <h2>Les essentiels pour vous et votre moto !</h2>


            <CategoriesContainer>
                {MockCategories.map((category) => (
                    <Card title={category.name}
                          key={category.id}
                          cover={<Image alt={category.name} src={category.image}/>}
                          bordered={false}
                          style={{width: 640}}
                    >
                        <p>Les casques sont obligatoires pour tous les conducteurs et passagers de motos, scooters,
                            tricycles et</p>
                    </Card>
                ))}
            </CategoriesContainer>


            <div className="background-image">
                <div className="background-overlay">
                    <h1 className="title-100">

                        <BiggerOnHover>Move&nbsp;</BiggerOnHover>
                        <BiggerOnHover>people&nbsp;</BiggerOnHover>
                        through
                    </h1>
                    <h1 className="title-100">
                        the
                        <span className="display-block-on-hover">wonders of sport</span>
                    </h1>
                </div>
            </div>
        </>
    )
}

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const BiggerOnHover = styled.span`
  &:hover {
    font-weight: bold;
    font-size: 2.5rem;
  }
`