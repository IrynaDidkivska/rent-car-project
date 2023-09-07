import Select from "react-select";
import { SpriteSVG } from "../../../public/SpriteSVG";
export const Selects = () => {
  return (
    <>
      <Select
        placeholder="Enter the text"
        // options={normalized}
        // defaultValue={initialValue}
        // value={initialValue}
        classNamePrefix="react-select"
        // onChange={(e) => handleCategoriId(e)}
        components={{
          DropdownIndicator: () => (
            <div>
              <SpriteSVG name={"select"} />
            </div>
          ),
        }}
      ></Select>
      <Select
        placeholder="To $"
        // options={normalized}
        // defaultValue={initialValue}
        // value={initialValue}
        classNamePrefix="react-select"
        // onChange={(e) => handleCategoriId(e)}
        components={{
          DropdownIndicator: () => (
            <div>
              <SpriteSVG name={"select"} />
            </div>
          ),
        }}
      ></Select>
    </>
  );
};
