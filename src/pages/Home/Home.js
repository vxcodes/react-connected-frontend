import React from 'react';
import { useState, useEffect } from "react";
import styles from './Home.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Newsbox from '../../components/Newsbox/Newsbox' 

function Home(props) {

    const [newsState, setNews] = useState({
        count: 0,
        next: null,
        previous: null,
        results: []
      })
    
      useEffect(function(){
        // if(!userState.user) return;
        async function getAndSetAppData() {
          const data = await fetch('https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=mGwR13rTsGscWrbPUVcKDaGbflhbVUAi')
          .then(res => res.json())


    
          setNews(data)
        }
        getAndSetAppData();
      }, [])

    return(
        <div>

            <div>
                <h1 className={styles.heading}>Homepage</h1>
            
            </div>
            <Sidebar className={styles.sidebar} user={props.user}/>
            <Newsbox className={styles.newsbox} newsData={newsState}/>
        </div>

    )
}

export default Home;