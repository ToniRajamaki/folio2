import React from 'react'

function FigmaProto() {
  const iframeStyle = {
    border: 'none', // Removes the border
    padding: '0',   // Removes padding around the iframe
    margin: '0',    // Removes margin around the iframe
  };

  return (
    <iframe
      style={iframeStyle}
      width="100%" // Sets the iframe width to 100% of the container
      height="800" // Adjust the height as needed
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FvM5s9GExMRFpzVYZAuMsd7%2FInnovation-course-WIreframes%3Fpage-id%3D0%253A1%26node-id%3D1-96%26starting-point-node-id%3D1%253A96%26mode%3Ddesign%26t%3DDJKBGDasJTBYQrco-1%26hide-ui%3D1"
      allowFullScreen
      frameBorder="0" // Use camelCase for React attributes
    >
    </iframe>
  )
}

export default FigmaProto;
