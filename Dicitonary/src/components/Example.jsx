import React from "react";
import './example.css'
const Example = ({ mean }) => {
  return (
    <>
      {mean.map((Val) => {
        return Val.meanings.map((Means) => {
          return Means.definitions.map((Def) => {
            return (
              <>
                {Def.example ? (
                  <li className="your-element">
                    {Def.example}
                  </li>
                ) : (
                  ""
                )}
              </>
            );
          });
        });
      })}
    </>
  );
};

export default Example;