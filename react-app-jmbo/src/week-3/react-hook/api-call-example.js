import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ApiCallExampleHook() {
  const [newsData, setNewsData] = useState();
  const [pageState, setPageState] = useState({ loading: true, error: false });

  useEffect(() => {
    getNewsDataFromAPI();
  }, [true]);

  // fucntion to get data from api
  function getNewsDataFromAPI() {
    axios
      .get(
        "http://newsapi.org/v2/everything?domains=wsj.com&apiKey=a8d874b5745041798af3f64b837d23e9"
      )
      .then(function (response) {
        setNewsData(response.data.articles);
        pageState.loading = false;
        setPageState({ ...pageState, pageState });
      }).catch(function(err){
        console.log(err);
        pageState.error= true;
        pageState.loading =true;
        setPageState({...pageState,pageState});
        console.log(pageState);
      });
  }
  return (
    <div style={{ marginTop: "5" }}>
      {pageState.loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {newsData.map((item) => (
            <Grid item xs="6" sm="4">
              <a target="_blank" href={item.url} style={{textDecoration: 'none'}}>
                <Card>
                  <CardHeader
                    avatar={<Avatar aria-label="recipe">R</Avatar>}
                    title={item.title}
                    subheader={new Date(item.publishedAt).toLocaleDateString()}
                  />
                  <CardMedia
                    image={item.urlToImage}
                    style={{
                      height: 0,
                      paddingTop: "56.25%", // 16:9
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </a>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}
