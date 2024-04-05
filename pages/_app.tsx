import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {AutoComplete, ConfigProvider, Layout} from 'antd'
import theme from '@/styles/theme/themeConfig'
import {Global} from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import Link from 'next/link'

const {Header, Content, Footer} = Layout

const options = [
    {value: 'Veste cuir'},
    {value: 'Gants moto bonne protection'},
    {value: 'Casque moto'},
    {value: 'Pantalon moto'},
    {value: 'Bottes moto'},
    {value: 'Blouson moto'},
    {value: 'Combinaison moto'},
    {value: 'Gants moto'},
    {value: 'Gants moto été'},
    {value: 'Gants moto hiver'},
    {value: 'Gants moto mi-saison'},
    {value: 'Gants moto racing'},
    {value: 'Gants moto textile'},
    {value: 'Gants moto cuir'},
    {value: 'Gants moto chauffants'},
]


export default function App({Component, pageProps}: AppProps) {
    return (
        <ConfigProvider theme={theme}>
            <Global styles={globalStyles}/>
            <Layout>
                <Header style={headerStyle}>
                    <li>
                        <Link href={'/concours'}>
                            Concours
                        </Link>
                    </li>
                    <SearchBar>x
                        <AutoComplete
                            style={{width: 300}}
                            options={options}
                            placeholder="Rechercher des produits..."
                            filterOption={(inputValue, option) =>
                                option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                        />
                    </SearchBar>
                    <li>panier</li>
                </Header>
                <Content style={contentStyle}>
                    <Component {...pageProps} />
                </Content>
            </Layout>
        </ConfigProvider>
    )
}

const SearchBar = styled.li`
  flex: 1;
  list-style: none;
`

const globalStyles = `
html,
body,
#__next {
  padding: 0;
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}
`

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'row',
    position: 'fixed',
    width: '100%',
}

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#2E3646',
    backgroundColor: '#fcfcfc',
}

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#000',
}
