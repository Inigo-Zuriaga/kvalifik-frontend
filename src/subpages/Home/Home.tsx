import Carousel_container from "../../components/Carousel/Carousel_container";
import Popexample from "../../components/ContactPopUp/Popupexample";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import LatestPost from "../../components/LatestPost/LatestPost";
import "..//..//assets/styles.scss";

export default function Home() {
  return (
    <main>
      <HomeBanner
        title="The place where musicians find musicians and play music together"
        banner="/src/assets/images/landing-page/header.jpg"
      />
      <Carousel_container title="That's what our users say" />
      <LatestPost />
      </main>
  );
}
