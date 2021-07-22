import React from "react";
import ZFlix from "./ZFlix";
import "./App.css";

/* Instead of mimicking the query to 
hit the API going to use this example hash instead.
*/
const exampleMovieData = {
  total: 5,
  data: [
    {
      mid: 1,
      title: "Black Widow",
      year: 2001,
      thumbnail:
        "https://www.designyourway.net/blog/wp-content/uploads/2018/08/387011_3d-cute-wallpapers-for-desktop-hd-1-jpg_1024x768_h-700x525.jpg",
    },
    {
      mid: 2,
      title: "Spiderman",
      year: 2000,
      thumbnail:
        "https://images-na.ssl-images-amazon.com/images/I/71itmKw7o9L._AC_UL600_SR600,600_.png",
    },
    { mid: 3, title: "Black Panther", year: 2021 },
    {
      mid: 4,
      title: "Cruella",
      year: 1990,
      thumbnail: "https://www.enjpg.com/img/2020/cute-91.jpg",
    },
    {
      mid: 5,
      title: "Avengers",
      year: 1900,
      thumbnail:
        "https://149619331.v2.pressablecdn.com/wp-content/uploads/2019/12/cuteiphone11.jpg",
    },
  ],
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ZFlix movieData={exampleMovieData} />
      </header>
    </div>
  );
}

export default App;
