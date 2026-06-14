import React, { useEffect, useState } from "react";

const ContactForm = ({ onSubmit, existing }) => {
  const categories = [
    "men",
    "women",
    "kid",
    "couple",
    "family",
    "group",
    "others",
  ];

  const mediaTypeCategories = ["image", "video"];

  const [Category, setCategory] = useState([]);
  const [mediaType, setmediaType] = useState("");
  const [mediaUrl, setmediaUrl] = useState("");
  const [Prompt, setPrompt] = useState("");
  const [Prompt2, setPrompt2] = useState("");
  const [description, setdescription] = useState("");

  useEffect(() => {
    if (existing) {
      setCategory(
        Array.isArray(existing.Category)
          ? existing.Category
          : existing.Category
            ? [existing.Category]
            : [],
      );

      setmediaType(existing.mediaType || "");
      setmediaUrl(existing.mediaUrl || "");
      setPrompt(existing.Prompt || "");
      setPrompt2(existing.Prompt2 || "");
      setdescription(existing.description || "");
    }
  }, [existing]);

  const handleCategoryChange = (category) => {
    if (Category.includes(category)) {
      setCategory(Category.filter((cat) => cat !== category));
    } else {
      setCategory([...Category, category]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Category.length === 0) {
      alert("Select at least one category");
      return;
    }

    onSubmit({
      Category,
      mediaType,
      mediaUrl,
      Prompt,
      Prompt2,
      description,
    });

    setCategory([]);
    setmediaType("");
    setmediaUrl("");
    setPrompt("");
    setPrompt2("");
    setdescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "15px" }}>
        <h4>Select Categories</h4>

        {categories.map((cat) => (
          <label
            key={cat}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          >
            <input
              type="checkbox"
              checked={Category.includes(cat)}
              onChange={() => handleCategoryChange(cat)}
            />
            {cat}
          </label>
        ))}
      </div>

      <select
        value={mediaType}
        required
        onChange={(e) => setmediaType(e.target.value)}
      >
        <option value="">Select Media Type</option>

        {mediaTypeCategories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <br />
      <br />

      <input
        type="text"
        value={mediaUrl}
        placeholder="Enter URL"
        required
        onChange={(e) => setmediaUrl(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        value={Prompt}
        placeholder="Enter Prompt..."
        required
        onChange={(e) => setPrompt(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        value={Prompt2}
        placeholder="Enter Prompt 2..."
        onChange={(e) => setPrompt2(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        value={description}
        placeholder="Enter Description..."
        onChange={(e) => setdescription(e.target.value)}
      />

      <br />
      <br />

      <button type="submit">{existing ? "Update" : "Add"}</button>
    </form>
  );
};

export default ContactForm;
