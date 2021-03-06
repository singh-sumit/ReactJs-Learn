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
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
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
    (pageState, newPageState) => ({ ...pageState, ...newPageState }),
    {
      pageNumber: 0,
      isLoading: true,
      isError: false,
      pageData: [],
      totalPage: 0,
      pageSize: 10,
    }
  );
  const handleChangePage = (event, newPage) => {
    setPageState({
      pageNumber: newPage - 1,
      isLoading: true,
    });
    //   getData();
    console.log(newPage);
  };

  const handleChangePageSize = (event) => {
    console.log(event.target.value);
    // let val=event.target.value;
    // setPageState({
    //   pageSize: val
    // });
    pageState.pageSize = event.target.value;
    setPageState({ ...pageState, pageState });

    getData();
  };

  useEffect(() => {
    getData();
  }, [pageState.pageNumber]);

  const getData = async () => {
    console.log("from axios part" + pageState.totalPage);
    await axios
      .get(
        "https://api.instantwebtools.net/v1/passenger?page=" +
          pageState.pageNumber +
          "&size=" +
          pageState.pageSize
      )
      .then(function (response) {
        setPageState({
          isLoading: false,
          pageData: response.data.data,
          totalPage: response.data.totalPages,
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
        {/* to change page size */}
        <div>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Page Size</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={pageState.totalPage}
              onChange={handleChangePageSize}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
          </FormControl>
        </div>
        {console.log(pageState.isLoading)}
        {pageState.isLoading ? (
          <CircularProgress />
        ) : (
          pageState.pageData.map((item) => (
            <Card style={{ marginTop: "20px" }}>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="recipe"
                    style={{}}
                    src={item.airline.logo}
                  ></Avatar>
                }
                title={item.airline.name + " , " + item.airline.country}
                subheader="September 14, 2016"
                component="h2"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Captain :<strong>{item.name}</strong>
                  <br />
                  Trips :{item.trips}
                  <br />
                  <i>{item.airline.slogan}</i>
                  <br />
                  Head Quaters :{item.airline.head_quaters}
                  <br />
                  Established At :{item.airline.established}
                  <br />
                  <a target="_blank" href={"https://" + item.airline.website}>
                    Visit page...
                  </a>
                </Typography>
              </CardContent>
            </Card>
          ))
        )}
      </div>
      <div style={{ margin: "20px auto" }}>
        <Pagination
          count={pageState.totalPage}
          onChange={handleChangePage}
          variant="outlined"
        />
      </div>
      {console.log(pageState)}
    </div>
  );
}
