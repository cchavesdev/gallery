import logo from "./logo.svg";
import "./App.css";
function generateVideo(index) {
  var videoUrl = `https://stgcicloaventura.blob.core.windows.net/endurance/endurance2023/${index}.mp4`;
  return (
    <div className="vid-container col-12 col-md-2">
      <video id={`video${index}`}>
        <source src={videoUrl} type="video/mp4" />
      </video>
      <a
        className="btn btn-success download-btn"
        href="https://stgcicloaventura.blob.core.windows.net/endurance/endurance2023/1.mp4"
        download={`${index}.mp4`}
      >
        Download
      </a>
    </div>
  );
}
function displayVideosHtml() {
  let videoHtml = [];
  for (var i = 1; i < 40; i++) {
    videoHtml.push(generateVideo(i));
  }
  return videoHtml;
}
function App() {
  return (
    <div className="App">
      <h1>Video Galery Endurance 2023</h1>
      <div className="d-flex flex-wrap justify-content-center p-3">{displayVideosHtml()}</div>
    </div>
  );
}

export default App;
