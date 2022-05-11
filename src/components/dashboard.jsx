import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./dashboard.css";
export const Dashboard = () => {
  let [search, setsearch] = useState("");
  console.log(search);
  let [show, setshow] = useState(false);

  let [page, setpage] = useState(6);
  let [alldata, setdata] = useState([]);

  useEffect(() => {
    take();
  }, [page]);

  let handlepage = (value) => {
    setpage(page + value);
    console.log(page);
  };
  let take = async () => {
    try {
      let res = await fetch(
        `https://api.github.com/users?page=${page}&per_page=5;rel="next"`
      );

      let data = await res.json();

      setdata(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            setsearch(e.target.value);
          }}
          value={search}
        />
      </div>
      <div id="form">
        {alldata
          .filter((alldata) => alldata.login.includes(search))
          .map((e) => (
            <div>
              <img src={e.avatar_url}></img>
              <h4>{e.login}</h4>
            </div>
          ))}
      </div>
      <button
        onClick={() => {
          handlepage(-1);
        }}
      >
        Prev. page
      </button>
      <button
        onClick={() => {
          handlepage(1);
        }}
      >
        Next page
      </button>
    </>
  );
};
