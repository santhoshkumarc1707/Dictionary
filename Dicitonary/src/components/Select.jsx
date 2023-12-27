import React from "react";
import './select.css'

const Select = ({ mean }) => {
  return (
    <>
      {mean.map((Val) => {
        return Val.meanings.map((Means) => {
          return Means.definitions.map((Def) => {
            return (
              <>
                <li className="text">
                  {Def.definition}
                </li>
                <hr />
              </>
            );
          });
        });
      })}
    </>
  );
};

export default Select;