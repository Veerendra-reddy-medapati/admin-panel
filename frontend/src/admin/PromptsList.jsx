import React from "react";

const ContactList = ({ PromptsData, deletePrompt, setEditPrompts }) => {
  return (
    <div>
      <h2>All Prompts</h2>

      <ul>
        {PromptsData.map((c) => (
          <li key={c._id}>
            <strong>
              {Array.isArray(c.Category) ? c.Category.join(", ") : c.Category}
            </strong>

            {" - "}

            {c.mediaType === "image" ? (
              <img
                src={c.mediaUrl}
                alt="Prompt Media"
                style={{
                  width: "200px",
                  display: "block",
                  margin: "10px 0",
                }}
              />
            ) : (
              <video
                controls
                style={{
                  width: "200px",
                  display: "block",
                  margin: "10px 0",
                }}
              >
                <source src={c.mediaUrl} type="video/mp4" />
              </video>
            )}

            <p>
              <strong>Prompt:</strong> {c.Prompt}
            </p>

            <p>
              <strong>Media Type:</strong> {c.mediaType}
            </p>

            <p>
              <strong>Prompt 2:</strong> {c.Prompt2}
            </p>

            <p>
              <strong>Description:</strong> {c.description}
            </p>

            <button onClick={() => setEditPrompts(c)}>Edit</button>

            <button onClick={() => deletePrompt(c._id)}>Delete</button>

            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
