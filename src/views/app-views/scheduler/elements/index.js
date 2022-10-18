import React from "react";
import { useRef } from "react";
import html2canvas from "html2canvas";
import ComponentChair from "./card/ComponentChair";
import ComponentTable from "./card/ComponentTable";

export const Elements = () => {
  const exportRef = useRef();

  const exportAsImage = async (el, imageFileName) => {
    const canvas = await html2canvas(el);
    const image = canvas.toDataURL("image/png", 1.0);
    downloadImage(image, imageFileName);
  };
  const downloadImage = (blob, fileName) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.style = "display:none;";
    fakeLink.download = fileName;

    fakeLink.href = blob;

    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);

    fakeLink.remove();
  };

  return (
    <div className="api-container-scheduler ">
      <div className="api-scheduler-block">
        <ComponentChair />
        <ComponentTable />
      </div>
      <div className="api-scheduler-board" ref={exportRef}>
      <button className="api-scheduler-board-btn" onClick={() => exportAsImage(exportRef.current, "file")}>
        Download
      </button>
      </div>
    </div>
  );
};

export default Elements;
