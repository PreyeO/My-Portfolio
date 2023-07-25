import classes from "../LandingPage/LandingPage.module.css";
import CountDown from "../../Components/CountDown/CountDown";
import DocumentTitle from "react-document-title";

const LandingPage = () => {
  return (
    <DocumentTitle title="My-Portfolio">
      <section className={classes.landing_page}>
        <h2>I am glad to have you here🤗</h2>
        <div className="container">
          <CountDown seconds={5} />
        </div>
      </section>
    </DocumentTitle>
  );
};

export default LandingPage;
