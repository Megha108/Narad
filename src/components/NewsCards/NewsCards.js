import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";

import useStyles from './styles.js';
import NewsCard from "../NewsCard/NewsCard.js";

const NewsCards = ({articles, activeArticle}) => {
    const classes = useStyles();

    const infoCards = [
        { color: 'rgba(14,20,108,0.5)', title: 'News by Sources',info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
        { color: 'rgba(127,101,186,0.5)', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
        { color: 'rgba(169,100,219,0.5)', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
        { color: 'rgba(182,107,186,0.5)', title: 'Latest News', text: 'Give me the latest news' },
      ];
    if(!articles.length)
    {
        return(
            <Grow in>
                <Grid className={classes.container} container alignItems="Stretch" spacing={3}>
                    {infoCards.map((infoCard) =>(
                        <Grid className={classes.infoCard} item xs={12} sm={6} md={4} lg={3}>
                            <div className={classes.card} style={{ backgroundColor: infoCard.color}}>
                                <Typography variant="h5">{ infoCard.title}</Typography>
                                {infoCard.info ?(<Typography variant="h6"><strong>{infoCard.title.split(' ')[2]}:</strong><br />{ infoCard.info}</Typography>) : null}

                                <Typography variant="h6">Try Saying: <br/> <i>{infoCard.text}</i></Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        )
    }
    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="Stretch" spacing={3}>
            {articles.map((article, i) => (
                <Grid key={i} item xs = {12} sm={6} md={4} lg = {3} style = {{display: 'flex'}}>
                    <NewsCard article = {article} activeArticle={activeArticle} i={i} />
                </Grid>
            ))}
            </Grid>

        </Grow>
    )
}

export default NewsCards;