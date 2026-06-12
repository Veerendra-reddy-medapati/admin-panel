import React, { useEffect, useState } from "react";

const ContactForm = ({ onSubmit, existing }) => {
  const categories = ["men", "women", "kid", "couple"];
  const mediaTypeCategories = ["image", "video"];

  const [Category, setCategory] = useState("");
  const [mediaType, setmediaType] = useState("");
  const [mediaUrl, setmediaUrl] = useState("");
  const [Prompt, setPrompt] = useState("");
  const [Prompt2, setPrompt2] = useState("");
  const [description, setdescription] = useState("");

  useEffect(() => {
    if (existing) {
      setCategory(existing.Category);
      setmediaType(existing.mediaType);
      setmediaUrl(existing.mediaUrl);
      setPrompt(existing.Prompt);
      setPrompt2(existing.Prompt2);
      setdescription(existing.description);
    }
  }, [existing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ Category, mediaType, mediaUrl, Prompt, Prompt2, description });
    setCategory("");
    setmediaType("");
    setmediaUrl("");
    setPrompt("");
    setPrompt2("");
    setdescription("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <select value={Category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>

        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={mediaType}
        required
        onChange={(e) => setmediaType(e.target.value)}
      >
        <option value="">Select Media Category</option>

        {mediaTypeCategories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <input
        type="text"
        value={mediaUrl}
        placeholder="enter URL"
        required
        onChange={(e) => setmediaUrl(e.target.value)}
      />
      <input
        type="text"
        value={Prompt}
        placeholder="enter prompt...."
        required
        onChange={(e) => setPrompt(e.target.value)}
      />

      <input
        type="text"
        value={Prompt2}
        placeholder="enter prompt 2...."
        onChange={(e) => setPrompt2(e.target.value)}
      />
      <input
        type="text"
        value={description}
        placeholder="enter description...."
        onChange={(e) => setdescription(e.target.value)}
      />

      <button type="submit">{existing ? "Update" : "Add"}</button>
    </form>
  );
};

export default ContactForm;
