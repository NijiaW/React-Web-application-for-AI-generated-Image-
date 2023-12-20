import React, { useState } from 'react';
import './AIQuokka.css';

const AIQuokka = () => {
    const [loading, setLoading] = useState(false);
    const [output, setOutput] = useState(null);
    const [warning1, setWaring1] = useState(false);
    const [warning2, setWaring2] = useState(false);

    function base64ToBlob(base64, mimeType) {
      // Decode the base64 string to a binary string
      const binaryString = atob(base64.split(',')[1]); // Split to remove the data URL part, like 'data:image/png;base64,'
  
      // Create a Uint8Array from the binary string
      const length = binaryString.length;
      const bytes = new Uint8Array(length);
      for (let i = 0; i < length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
      }
  
      // Create and return a blob from the Uint8Array
      return new Blob([bytes], {type: mimeType});
  }

    const handleSubmit = async (event) => {
      event.preventDefault();

      if (event.target.elements.input.value.trim() === ''){
        setWaring1(true);
        return
      }
      else{
        setWaring1(false);
      }
      setLoading(true);
      try {
        const input = event.target.elements.input.value.toLowerCase();
        const payload = {
          "text": input.includes("quokka") ? input: "quokka " + input
        }
        const response = await fetch(
          "https://chqhuveo12.execute-api.us-east-2.amazonaws.com/default/text2image2-PredictFunction-lqyR6YqQMWff",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to generate image");
        }

        const data = await response.json();
        const base64String = "data:image/png;base64," + data.body;
        const mimeType = 'image/png'; 
        const imageBlob = base64ToBlob(base64String, mimeType);
        setOutput(URL.createObjectURL(imageBlob));
        setWaring2(false);

      } catch (error) {
        console.error(error);
        setWaring2(true);
      }
      
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
      <main id="main-content">
        <div className='quokkaAI'>
          <div className='quokkaAI_container'>
            <h1>Quokka's <span>AI Image</span> Generator</h1>
            <form className="gen-form" onSubmit={handleSubmit}>
              <input type="text" name="input" placeholder="e.g. a cute quokka" />
              {warning1 ? <span className="error--no-input">keywords are required</span> : null }
              {warning2 ? <span className="error--no-quota">Sorry, we ran out of quokka (quota)! Please come back tomorrow!</span> : null }           
              <button type="submit">Generate</button>
            </form>
            <div>
            {loading && <div className="loading">Loading...</div>}
            {!loading && output && (
              <div className="result-image">
                <img src={output} alt="Generated Image"  />
                <button onClick={downloadImage}>Download Quokka</button>
              </div>
            )}
            </div>
          </div>
        </div>
      </main>);
  };
  
  export default AIQuokka;

