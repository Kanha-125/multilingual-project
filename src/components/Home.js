import Accordion from "react-bootstrap/Accordion";
import langHome from "../utils/homeLangConstants";
import { useContext } from "react";
import { appData } from "../utils/contextApi";

function Home() {
  const { choosenLanguage } = useContext(appData);

  return (
    <Accordion className="m-3">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{langHome[choosenLanguage].title1}</Accordion.Header>
        <Accordion.Body>{langHome[choosenLanguage].content1}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>{langHome[choosenLanguage].title2}</Accordion.Header>
        <Accordion.Body>{langHome[choosenLanguage].content2}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Home;
