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
        articles: []
      })
    
      useEffect(function(){
        // if(!userState.user) return;
        async function getAndSetAppData() {
          const data = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c3d82c1c38094042b323e949f8c13887')
          .then(res => res.json())

          setNews(data)
        }
        getAndSetAppData();
      })

    return(
        <div>

            <div>
                <h1 className={styles.heading}>Homepage</h1>
            
            </div>
            <Sidebar className={styles.sidebar}/>
            <Newsbox className={styles.newsbox} newsData={newsState}/>
        </div>

    )
}

export default Home;