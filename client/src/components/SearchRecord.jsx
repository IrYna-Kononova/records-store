import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SearchRecord.scss";
import { motion } from "framer-motion";

const SearchRecord = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => setSearchTerm(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(searchTerm ? `/records/${searchTerm}` : "/records");
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="search-record "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search by genre"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </motion.form>
  );
};

export default SearchRecord;
