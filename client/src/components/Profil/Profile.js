import React from 'react'
import './profil.css'

const Profile = ()=>{
    return(
        <div>
            <div>
                <h1>Progression cours</h1>
                <div className="table-responsive">
                    <Progression/>
                </div>
            </div>
            <div>
                <h1>Notes QCM</h1>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Chapitres</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>{/*DYNAMIQUE AVEC BDD*/}
                            <tr>
                                <td>nombre complexe</td>{/*Titre qui correspond au chapitre de la bdd*/}
                                <td>20/20</td>{/*correspond au chapitre actuel de l'utilisateur dans le chapitre*/}
                            </tr>
                            <tr>
                                <td>sommes</td>
                                <td>20/20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Profile

export const Progression = () =>{
    // mettre du code js ici si besoin
    return(
        <container class="col-12">
            <div>Math
                <div class="progress">
                    <div class="progress-bar progress-bar-striped" id="progress-bar1"  aria-valuemin="0" aria-valuemax="100">10%</div>
                </div>
            </div>

            <div>Physique
                <div class="progress">
                    <div class="progress-bar progress-bar-striped" id="progress-bar2"  aria-valuemin="0" aria-valuemax="100">30%</div>
                </div>
            </div>

            <div>Elec
                <div class="progress">
                    <div class="progress-bar progress-bar-striped" id="progress-bar3"  aria-valuemin="0" aria-valuemax="100">70%</div>
                </div>
            </div>
        </container>
    )
}