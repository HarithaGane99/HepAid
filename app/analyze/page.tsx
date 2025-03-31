"use client";

import { useState } from "react";
import "../styles/styles.css";

export default function Analyze() {
  const [image, setImage] = useState<File | null>(null);
  const [segmentation, setSegmentation] = useState<string | null>(null);
  const [classification, setClassification] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!image) {
      alert("Please upload an image first.");
      return;
    }

    setIsLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      setSegmentation(data.segmentation);
      setClassification(data.classification);
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card">
      <h1>🧪 Analyze Liver CT Scan</h1>
      <p>Upload a CT image and get AI-powered tumor analysis.</p>

      <input type="file" accept="image/*" onChange={handleImageUpload} className="file-input" />

      <button onClick={handleSubmit} disabled={isLoading} className="analyze-btn">
        {isLoading ? "Processing..." : "Analyze Image"}
      </button>

      {error && <div className="error">{error}</div>}

      {segmentation && (
        <div className="result">
          <h2>🧬 Segmentation Result</h2>
          <img src={segmentation} alt="Segmented Output" />
        </div>
      )}

      {classification && (
        <div className="result">
          <h2>📊 Classification</h2>
          <p>{classification}</p>
        </div>
      )}
    </div>
  );
}
