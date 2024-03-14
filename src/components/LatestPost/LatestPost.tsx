import { NavLink } from "react-router-dom";
import "..//..//assets/styles.scss";
import Post from "../Post/Post";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LatestPost() {
  const [posts, setPosts] = useState([]);
  const [tokenTrue, setTokenTrue] = useState(localStorage.getItem("token"));
  //   const [error, setError] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/postbulletin`).then((data: any) => {
      console.log(data);

      setPosts(data.data);
      //debugger;
    });
  }, []);

  return (
    <>
      <section className="latest-post">
        <h2>Latest posts</h2>
        {tokenTrue && tokenTrue != "undefined" ? (
        <NavLink className="latest-post__button" to="/FindPost">
          See more
        </NavLink>
        ) : null}
        <Swiper className="mySwiper">
          {posts.length ? (
            <>
              {posts.map((posts) => (
                <SwiperSlide>
                  <Post
                    title={posts.title}
                    location="Copenhagen"
                    musicians={posts.genre}
                    description={posts.description}
                    instrument={posts.instrument}
                    experience={posts.minimumLevel}
                  />
                </SwiperSlide>
              ))}
            </>
          ) : (
            <div>Loading...</div>
          )}
        </Swiper>
      </section>
    </>
  );
}
