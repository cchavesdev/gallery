import React from "react";
import LoadingSpinner from "./LoadingSpinner";


function generateVideo(index) {
  var videoUrl = `https://stgcicloaventura.blob.core.windows.net/endurance/endurance2023/${index}.mp4`;
  return (
    <div key={index} className="vid-container col-12 col-md-2">
      <video id={`video${index}`} controls>
        <source src={videoUrl} type="video/mp4" />
      </video>
      <a
        className="btn btn-success download-btn"
        href={videoUrl}
        download={`${index}.mp4`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-download"
          viewBox="0 0 16 16"
        >
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
        </svg>
      </a>
    </div>
  );
}

function displayVideosHtml() {
  let videoHtml = [];
  for (var i = 1; i < 42; i++) {
    videoHtml.push(generateVideo(i));
  }
  return videoHtml;
}

function VideoGallery() {
  return (
    <div>
      <h1 className="pt-3">Endurance Miramar 2023</h1>
      <div className="d-flex flex-wrap justify-content-center p-3">
        {displayVideosHtml()}
      </div>
      <LoadingSpinner></LoadingSpinner>
    </div>
  );
}

export default VideoGallery;
