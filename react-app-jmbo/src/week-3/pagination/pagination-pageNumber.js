import React, { useEffect, useReducer, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  IconButton,
  Typography,
} from "@material-ui/core";

export default function PaginationPageNumber() {
//   const [pageState, setPageState] = useState({
//     pageNumber: 0,
//     isLoading: true,
//     isError: false,
//     pageData: [],
//     totalPage: 0,
//   });
    const [pageState, setPageState] = useReducer(
        (pageState, newPageState) => ({...pageState, ...newPageState}),
        {
                pageNumber: 0,
                isLoading: true,
                isError: false,
                pageData: [],
                totalPage: 0,
         }
      )
  const handleChangePage = (event, newPage) => {
      setPageState({
          pageNumber : newPage-1,
          isLoading : true,
      });
    //   getData();
    console.log(newPage);
  };

  useEffect(() => {
    getData();
  },[pageState.pageNumber]);

  const getData = async ()=>{
    await axios.get('https://api.instantwebtools.net/v1/passenger?page='+pageState.pageNumber+'&size=10')
      .then(function (response) {
          setPageState({
              isLoading :false,
              pageData : response.data.data,
              totalPage :response.data.totalPages
          });
        // pageState.isLoading = false;
        // pageState.pageData = response.data.data;
        // pageState.totalPage = [response.data.totalPages];
        // setPageState({...pageState,pageState});
        console.log(pageState);
      })
      .catch(function (err) {
        console.log("error in api loading :" + err);
      });
  };
  return (
    <div style={{ maxWidth: 700, margin: "auto" }}>
      <div>
          {console.log(pageState.isLoading)}
        {pageState.isLoading ? <CircularProgress /> :
          pageState.pageData.map((item) => 
            <Card style={{marginTop: '20px'}}>
              <CardHeader
                avatar={<Avatar aria-label="recipe" style={{}} src={item.airline.logo}></Avatar>}
                title={item.airline.name+' , '+item.airline.country}
                subheader="September 14, 2016"
                component='h2'
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                Captain :<strong>{item.name}</strong><br />
                Trips :{item.trips}<br />
                 <i>{item.airline.slogan}</i><br />
                  Head Quaters :{item.airline.head_quaters}<br/>
                  Established At :{item.airline.established}<br/>
                  <a target="_blank" href={'https://'+item.airline.website}>Visit page...</a>
                </Typography>
              </CardContent>
            </Card>
          )
        }
      </div>
      <div style={{ margin: "20px auto" }}>
        <Pagination count={10} onChange={handleChangePage} variant="outlined" />
      </div>
      {console.log(pageState)} 
    </div>
  );
}
