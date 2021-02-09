import React, { FunctionComponent, Fragment, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Movies from "./components/Movies/Movies";

const App: FunctionComponent<{}> = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Fragment>
      <div className="container">
        <div className="flex-row">
          <SearchBar
            handleChangeTerm={(event: any) => setSearchTerm(event.target.value)}
          />
          <Movies searchTerm={searchTerm}/>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
