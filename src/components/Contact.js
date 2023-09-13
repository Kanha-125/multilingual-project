import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { appData } from "../utils/contextApi";
import contactLang from "../utils/contactLangConstants";

function Contact() {
  const { choosenLanguage } = useContext(appData);

  return (
    <Form className="m-5" onSubmit={(e) => e.preventDefault()}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{contactLang[choosenLanguage].email}</Form.Label>
        <Form.Control
          type="email"
          placeholder={contactLang[choosenLanguage].emailPlaceholder}
        />
        <Form.Text className="text-muted">
          {contactLang[choosenLanguage].emailWarning}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{contactLang[choosenLanguage].password}</Form.Label>
        <Form.Control
          type="password"
          placeholder={contactLang[choosenLanguage].password}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {contactLang[choosenLanguage].button}
      </Button>
    </Form>
  );
}

export default Contact;
