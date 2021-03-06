import React, {useContext, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import './Footer.css'
import logo from '../../Images/logo.png'


const Footer = () =>{
    return(
        <footer class="col-12" id="footer">
            <div class="container">
            <div class="row">
                <div class="col-2 ">
                    <img src={logo} alt="logo" id="logo"/>
                </div>
                <div class="col-10">
                    <div class="row">
                    <div class="col-md-4 text-center ">
                            <p id="text" >Mentions Légales</p>
                        </div>
                        <div class="col-md-4 text-center ">
                            <p id="text" >Fée des maths</p>
                        </div>
                        <div class="col-md-4 text-center ">
                            <p id="text" >Site internet du projet 9</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </footer>

    )
}

export default Footer