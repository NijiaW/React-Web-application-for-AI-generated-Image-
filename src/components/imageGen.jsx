import React, { useState } from 'react';
import Api from './api';
import './style.css';

const ImageGenerationForm = () => {
    const [loading, setLoading] = useState(false);
    const [output, setOutput] = useState(null);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
  
      const input = event.target.elements.input.value;
      const response = await fetch(
        "https://api-inference.huggingface.co/models/prompthero/openjourney",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Api}`,
          },
          body: JSON.stringify({ inputs: input }),
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to generate image");
      }
  
      const blob = await response.blob();
      setOutput(URL.createObjectURL(blob));
      setLoading(false);
    };
    
    const downloadImage = () => {
        if (output) {
          const link = document.createElement('a');
          link.href = output;
          link.download = 'generated_image.png';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      };

    return (
      <div className="container">
      <h1>Nijia's AI Image <span>Generator</span> (Stable Diffusion)</h1>
      <form className="gen-form" onSubmit={handleSubmit}>
        <input type="text" name="input" placeholder="type your prompt here..." />
        <button type="submit">Generate</button>
      </form>
      <div>
      {loading && <div className="loading">Loading...</div>}
      {!loading && output && (
        <div className="result-image">
          <img src={output} alt="art"  />
          <button onClick={downloadImage}>Download Image</button>
        </div>
      )}
      </div>
      </div>);
  };
  
  export default ImageGenerationForm;
