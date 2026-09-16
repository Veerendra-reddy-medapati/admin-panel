import React, { useEffect, useState } from "react";
import API from "../api";
import ContactForm from "./PromptsForm";

const TwoCategories = () => {
  const [prompts, setPrompts] = useState([]);
  const [editPrompt, setEditPrompt] = useState(null);

  const fetchPrompts = async () => {
    try {
      const res = await API.get("/api/prompts");

      // Only prompts having exactly 2 categories
      const twoCategoryPrompts = res.data.filter(
        (item) => Array.isArray(item.Category) && item.Category.length === 2,
      );

      setPrompts(twoCategoryPrompts);
    } catch (error) {
      console.error("Error fetching prompts:", error);
    }
  };

  useEffect(() => {
    fetchPrompts();
  }, []);

  const updatePrompt = async (data) => {
    try {
      await API.put(`/api/prompts/${editPrompt._id}`, data);

      setEditPrompt(null);
      fetchPrompts();
    } catch (error) {
      console.error("Error updating prompt:", error);
    }
  };

  const deletePrompt = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this prompt?",
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/api/prompts/${id}`);
      fetchPrompts();
    } catch (error) {
      console.error("Error deleting prompt:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Two Category Prompts</h2>

      {editPrompt && (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            marginBottom: "30px",
          }}
        >
          <h3>Update Prompt</h3>

          <ContactForm
            onSubmit={updatePrompt}
            existing={editPrompt}
          />

          <button onClick={() => setEditPrompt(null)}>
            Cancel
          </button>
        </div>
      )}

      <h3>Total: {prompts.length}</h3>

      {prompts.length === 0 ? (
        <p>No two category prompts found.</p>
      ) : (
        <ul>
          {prompts.map((item) => (
            <li key={item._id} style={{ marginBottom: "30px" }}>
              <strong>Categories:</strong>{" "}
              {item.Category.join(" + ")}

              {item.mediaType === "image" ? (
                <img
                  src={item.mediaUrl}
                  alt="Prompt"
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
                  <source src={item.mediaUrl} type="video/mp4" />
                </video>
              )}

              <p>
                <strong>Prompt:</strong> {item.Prompt}
              </p>

              <p>
                <strong>Prompt 2:</strong> {item.Prompt2}
              </p>

              <p>
                <strong>Description:</strong> {item.description}
              </p>

              <p>
                <strong>Media Type:</strong> {item.mediaType}
              </p>

              <button onClick={() => setEditPrompt(item)}>
                Edit
              </button>

              <button
                onClick={() => deletePrompt(item._id)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>

              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TwoCategories;
