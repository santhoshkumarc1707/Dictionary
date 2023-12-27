import React from "react";
import Select from "./Select.jsx";
import Example from "./Example.jsx";


const Defination = ({ mean, main, audio }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="div_cont">
            {main.word}
          </div>
          {audio ? (
            <audio
              controls
              className="audio_cont"
              src={audio}
            ></audio>
          ) : (
            <div className="color fs-3 text-center">Audio not found</div>
          )}
          <div className="div">
            meaning & definitions :
          </div>
          <div>
            <ol>
              <Select mean={mean} />
            </ol>
          </div>
          <div className="div">
            examples :
          </div>
          <div>
            <ol>
              <Example mean={mean} />
            </ol>
          </div>
          <div className="div">
            synonyms :
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Defination;