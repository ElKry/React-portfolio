import React from "react";
import { Element } from "react-scroll";
import { Form } from "../../features/form/form";
import { HookForm } from "../../features/hookForm/hookForm";

import "./contacts.css";

export const Contacts = () => {
  return (
    <Element name="contacts" className="contacts">
      <Form />
      <br />
      <HookForm />
    </Element>
  );
};
