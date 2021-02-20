import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const urlIframe =
  '<iframe src="https://onedrive.live.com/embed?resid=1EB9A25728760E08%215189&amp;authkey=%21AFuemMImkjPq4Yk&amp;em=2&amp;wdAr=1.7786561264822134" width="350px" height="221px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>';

const Lecture = () => {
  const [link, setLink] = useState("");

  const history = useHistory();

  useEffect(() => {
    const data = urlIframe.split(" ")[1].split("src=")[1].split('"')[1];
    setLink(data);
  }, []);

  const handle = useFullScreenHandle();

  const onClickFullScreen = () => {
    handle.enter();
  };

  return (
    <div className="page">
      <div className="arrow-btn left-arrow" onClick={() => history.goBack()}>
        <h1>Lesson 1</h1>
      </div>
      <div className="page-contain">
        <div className="lesson-container">
          <div className="lesson-title">
            <h1>Lecture</h1>
          </div>
          <div className="lesson-wrap">
            <div className="non-fs">
              <FullScreen handle={handle}>
                <div
                  className={
                    document.fullscreenElement === null ? "non-fs" : "fs"
                  }
                  dangerouslySetInnerHTML={{
                    __html: `
          <iframe
            id=${document.fullscreenElement === null ? "nonfs" : "fs"}
            title="lesson 1"
            src='${link}'
            frameBorder="0"
            width="100%"
          />
          `,
                  }}
                />
              </FullScreen>
            </div>
            <div className="tool-bar">
              <div className="full-btn" onClick={onClickFullScreen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lecture;
