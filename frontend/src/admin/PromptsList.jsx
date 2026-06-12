import React from "react";

const ContactList = ({ PromptsData, deletePrompt, setEditPrompts }) => {
  return (
    <div>
      <h2>All prompts</h2>
      <ul>
        {PromptsData.map((c) => (
          <li key={c._id}>
            <strong>{c.Category}</strong> -
            {c.mediaType === "image" ? (
              <img src={c.mediaUrl} alt="" />
            ) : (
              <video controls>
                <source src={c.mediaUrl} type="video/mp4" />
              </video>
            )}
            -{c.Prompt} -{c.mediaType} -{c.Prompt2}-{c.description}-
            <button onClick={() => setEditPrompts(c)}>Edit</button>
            <button onClick={() => deletePrompt(c._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
