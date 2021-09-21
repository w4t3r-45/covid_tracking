import { useRef } from "react";
import {
  TextField,
  Box,
  CssBaseline,
  Button,
  Typography,
  Divider,
  Alert
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetch_data } from "./redux/actions/actions";
import { LineChart, YAxis, XAxis, CartesianGrid, Line } from "recharts";

function App() {
  const dispatch = useDispatch();
  const inpRef = useRef(null);
  const fetched_data = useSelector((state) => state.ui.data);
  //handle search btn click
  const handleSearch = (event) => {
    // we will get our input value to get country code -- later --
    console.log("country code :", inpRef.current.value);
    dispatch(
      fetch_data({
        country_code: inpRef.current.value != "" ? inpRef.current.value : "dz"
      })
    );
  };

  return (
    <>
      <CssBaseline />
      <Box
        display="flex"
        flexDirection="column"
        justifyConten="center"
        alignItems="center"
        sx={{ width: "100%", pt: 2 }}
      >
        {/* replace with message component */}
        {/* <Typography variant="h4">Welcome to COVID-19 TRACKER</Typography> */}
        <Alert severity="info">Welcome to COVID-19 TRACKER</Alert>
        <Divider flexItem orientation="horizontal" sx={{ mb: 2, mt: 1 }} />
        <TextField
          placeholder="search"
          size="small"
          inputRef={inpRef}
          sx={{
            width: "80%",
            margin: "auto",
            "& .MuiOutlinedInput-input": {
              textAlign: "center"
            }
          }}
        />
        <Button
          variant="outlined"
          color="info"
          size="small"
          sx={{ mt: 2, width: "50%" }}
          onClick={(event) => handleSearch(event)}
        >
          Search
        </Button>
        <Box sx={{ mt: 2, bgcolor: "red", width: "100%" }}>
          {fetched_data ? (
            fetched_data.map((el, index) => <Box>{el.Deaths}</Box>)
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </>
  );
}

export default App;
