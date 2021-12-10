import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import SideBar from "../components/sidebar"
import TopNavLinks from "../components/reusable/topnavlinks"
import Back from "../images/back.svg"
import { useHistory } from "react-router-dom"
import useUser from "../hooks/use-User"

export default function Country(){

    const [state, setState] = useState({})
    const {name} = useParams()
    const {user} = useUser()

    let history = useHistory()

    const getCountry = async() => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
        const state = await response.json()
        setState([...state])
    }

    const addCommas = (number) =>{
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    useEffect(() => {
        getCountry()
    }, [])

    return (
        <div className="country-main">
            <div className="country-container">
                <SideBar />
                <div className="country-body">
                    <div className="topNav">
                        <div className="page-title">
                                <h2 
                                onClick={() => history.goBack()}
                                style={{display: "flex", cursor:'pointer'}}
                                >
                                    <img style={{padding:3,borderRadius:"50%",background:"#fff"}} src={Back} alt="Black back arrow"/>
                                    <span style={{marginLeft:"1rem"}}>BACK</span>
                                </h2>
                        </div>
                        <TopNavLinks user={user}/>
                    </div>
                    {state[0] ? 
                    <div className="country-details">
                        <img src={state[0].flags.svg} alt="Belgium flag"/>
                        <div className="country-description">
                            <h2>{state[0].name.common}</h2>
                            <div className="one-by-one">
                                <span><strong>Capital:</strong> {state[0].capital ? state[0].capital : "-" }</span>
                                <span><strong>Population:</strong> {addCommas(state[0].population)}</span>
                                <span><strong>Region:</strong> {state[0].region}</span>
                                <span><strong>Sub Region:</strong> {state[0].subRegion ? state[0].subRegion : "-" }</span>
                                <span><strong>Alt Spelling:</strong> {state[0].altSpellings[0]}</span>
                                <span><strong>Top Level Domain:</strong> {state[0].tld ? state[0].tld : "-" }</span>
                                <span><strong>Sub Region:</strong> {state[0].subregion}</span>
                            </div>
                            <p id="borders"><strong>Border Countries: </strong>
                                {state[0].borders ? state[0].borders.map((country, index) => (
                                    <span key={index}>{country}</span>
                                )): <span>No borders</span>}
                            </p>
                        </div>
                    </div>
                    :<p>Please wait still loading</p>}
                </div>
            
            </div>
        </div>
    )
}