import React, { useCallback, useRef, useState } from "react";

const arr = [
  { id: 1, name: "стул" },
  { id: 2, name: "стул" },
  { id: 3, name: "стул" },
  { id: 4, name: "стул" },
  { id: 5, name: "стул" },
  { id: 6, name: "стул" },
  { id: 7, name: "стул" },
  { id: 8, name: "стул" },
  { id: 9, name: "стул" },
  { id: 10, name: "стул" },
];

const ComponentChair = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [current, setCurrent] = useState();
  const [id, setId] = useState(1);
  const elementRef = useRef();

  const onMouseDown = useCallback(
    (item) => {
        const onMouseMove = (event) => {
          position.x += event.movementX;
          position.y += event.movementY;
          const element = elementRef.current;
          if (
            element &&
            element.className === "api-chair"
          ) {
            // element.style.position = 'relative';
            element.style.transform = `translate(${position.x}px, ${position.y}px)`;
            // element.style.left = `${position.x}px`;
            // element.style.top = `${position.y}px`
          }
          setPosition(position)
        };
        const onMouseUp = () => {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
        };
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    },

    [position, setPosition]
  );

  return (
    <>
      {arr.map((item) => (
        <div
          onMouseDown={(e) => {
            setCurrent(e);
            elementRef.current = e.target
            onMouseDown(item);
          }}
          className="api-chair"
          key={item.id}
          id={item.id}
        >
          {item.name}
        </div>
      ))}
    </>
  );
};

export default ComponentChair;
