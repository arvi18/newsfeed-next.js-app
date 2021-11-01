import React from 'react';
import styles from '../styles/EOM.module.css'
import { Toolbar } from '../components/Toolbar';

function EOM({employee}) {
    return (
        <div className="page-container">
        <Toolbar />
            <div className={styles.EOM}>
                <h1>*** EOM page ***</h1>
                <h3>{employee.name}</h3>
                <img className={styles.img1} src={employee.image} alt={employee.name} />
                <h4>{employee.position}</h4>
                <p>{employee.description}</p>
            </div>
        </div>
    )
}

export const getServerSideProps = pageContext =>{
    // supposed to get stuff from backend but me being lazy as always; didn't setup an api :/
    const employee = {
        "name": "Arvind Shelke",
        "position": "< Web Developer />",
        "image": "https://media-exp1.licdn.com/dms/image/C4E03AQHTL_2pqA1wzA/profile-displayphoto-shrink_400_400/0/1624674526141?e=1641427200&v=beta&t=VOStLl1ANy6CQDYz1ijKoOjymkU4TG0pLDMagw7ctr0",
        "description": "Exploring full stack web developement and crawling through sweetness of coding regime"
      }
        return{
            props: {
              employee,
            },
          };
    }

export default EOM