import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards  from "./components/NewsCards/NewsCards";
import useStyle from './styles.js';
import wordsToNumbers from 'words-to-numbers';
const alanKey = '7c2fed3eb66e97e6790c42ef0b620c852e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    const [newsArticles, setNewsArticles] = useState([])
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyle();
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles,number }) => {
                if(command === 'newHeadlines'){
                   setNewsArticles(articles);
                   setActiveArticle(-1);
                }
                else if(command === 'highlight'){
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                }
                else if (command === 'open') {
                    const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
                    const article = articles[parsedNumber - 1];
          
                    if (parsedNumber > articles.length) {
                      alanBtn().playText('Please try that again...');
                    } else if (article) {
                      window.open(article.url, '_blank');
                      alanBtn().playText('Opening...');
                    } else {
                      alanBtn().playText('Please try that again...');
                    }
                }
            }

        })
    }, [])
    return (
        <div>
            <div className={classes.logoContainer}>
                <img src="https://media.discordapp.net/attachments/1007695745756966964/1057265701561303060/main_page-removebg-preview.png" className={classes.naradLogo} alt="Narad logo"/>
                
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
        </div>
    )
}

 export default App;

 