import React, { useState } from "react";
import { Img } from "./Img";

export const Card: React.FC = () => {
  const [data, setData] = useState<number>(0);
  const [selected, setSelected] = useState<number>(0);
  const arr: string[] = Array(1000).fill("1");

  return (
    <div style={{ display: "flex", height: "100vh", width: "80vw", marginRight: "20px", overflowX: "hidden",
          scrollbarWidth: "none", }}>
      <div
        style={{
          width: "35%",
          overflowY: "auto",
          scrollbarWidth: "none",
          maxHeight: "100vh",
        }}
      >
        {arr.map((i, ind) => (
          <div
            style={{
              textAlign: "left",
              cursor: "pointer",
              padding: "2%",
              backgroundColor: selected === ind ? "white" : "transparent",
              color: selected === ind ? "black" : "white",
            }}
            onClick={() => {
              setData(ind);
              setSelected(ind);
            }}
            key={i}
          >
            <h1>Customer {ind + 1}</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries,
            </p>
          </div>
        ))}
      </div>
      <div
        style={{
          width: "55%",
          margin: "10px",
          height: "100vh",
          overflowY: "auto",
          scrollbarWidth: "none",
        }}
      >
        <h1>Customer {data + 1} Details Here</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,{" "}
        </p>
        <div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <Img key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
