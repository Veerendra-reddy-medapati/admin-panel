import React, { useEffect, useState } from "react";
import ContactForm from "./PromptsForm";
import API from "../api";
import "../App.css";
import ContactList from "./PromptsList";

const Admin = () => {
  const [PromptsData, setPromptsData] = useState([]);
  const [EditPrompts, setEditPrompts] = useState(null);

  //load all contacts
  const fetchPrompts = async () => {
    const res = await API.get("/");
    setPromptsData(res.data);
  };

  useEffect(() => {
    fetchPrompts();
  }, []);

  //add new contact
  const addPrompt = async (data) => {
    await API.post("/", data);
    fetchPrompts();
  };

  //delete contact
  const deletePrompt = async (id) => {
    await API.delete(`/${id}`);
    fetchPrompts();
  };

  //update contact
  const updatePrompt = async (data) => {
    await API.put(`/${EditPrompts._id}`, data);
    setEditPrompts(null);
    fetchPrompts();
  };

  return (
    <div>
      <ContactForm
        onSubmit={EditPrompts ? updatePrompt : addPrompt}
        existing={EditPrompts}
      />
      <ContactList
        PromptsData={PromptsData}
        deletePrompt={deletePrompt}
        setEditPrompts={setEditPrompts}
      />
    </div>
  );
};

export default Admin;
