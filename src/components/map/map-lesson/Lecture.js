import React, { useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const Lecture = (props) => {
  const [isFS, setIsFS] = useState(false);

  const handle = useFullScreenHandle();

  const onClickFullScreen = () => {
    handle.enter();
    setIsFS(true);
  };

  const onClickExitFullScreen = () => {
    handle.exit();
    setIsFS(false);
  };

  //! Handle exit fullscreen logic
  document.addEventListener("fullscreenchange", exitHandler);
  document.addEventListener("webkitfullscreenchange", exitHandler);
  document.addEventListener("mozfullscreenchange", exitHandler);
  document.addEventListener("MSFullscreenChange", exitHandler);

  function exitHandler() {
    if (
      !document.fullscreenElement &&
      !document.webkitIsFullScreen &&
      !document.mozFullScreen &&
      !document.msFullscreenElement
    ) {
      setIsFS(false);
    }
  }

  return (
    <div className="lesson-wrap">
      <div className="non-fs">
        <FullScreen handle={handle}>
          <div
            className={document.fullscreenElement === null ? "non-fs" : "fs"}
            dangerouslySetInnerHTML={{
              __html: `
<iframe
  id=${document.fullscreenElement === null ? "nonfs" : "fs"}
  title="lesson 1"
  src="${props.url}"
  frameBorder="0"
  width="100%"
/>
`,
            }}
          />
          {isFS && (
            <div id="showMe" className="tool-bar-fs">
              <div className="full-btn" onClick={onClickExitFullScreen} />
            </div>
          )}
        </FullScreen>
      </div>
      {!isFS && (
        <div id="showMe" className="tool-bar">
          <div className="full-btn" onClick={onClickFullScreen} />
        </div>
      )}
    </div>
  );
};

export default Lecture;
