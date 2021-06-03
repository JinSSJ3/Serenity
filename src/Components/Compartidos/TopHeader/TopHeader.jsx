import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import React from "react";
import "../../../Styles/TopHeader.scss";
export const dummyLoation = [
  { page: "page 1", href: "" },
  { page: "page 2", href: "" },
  { page: "page 3", href: "" },
  { page: "page 4", href: "" },
  { page: "page 5", href: "" },
  { page: "Current page", href: "" },
];

const TopHeader = (props) => {
  const { subtitulo } = props;
  const handleClick = () => {};

  /*   const localization = dummyLoation.slice(1);
  const currentPage = dummyLoation[dummyLoation.length - 1];
 */
  /* console.log(
    "localization",
    props.history.location.pathname.split("/").splice(1) || ""
  ); */
  const makeRef = (listPath) => {
    // console.log("makeref ini", listPath);
    let listRef = [];
    let j = 1;
    for (let i = 0; i < listPath.length; i++) {
      let ref = "";
      for (let k = 0; k < j; k++) {
        ref += `/${listPath[k]}`;
      }
      listRef.push({ page: listPath[i], href: ref });
    }
    //console.log("makeref fin", listRef);

    return listRef;
  };
  let listPath;
  let currentPage = "";
  let localization = [];
  if (!props.history) {
    listPath = "";
  } else {
    listPath = props.history.location.pathname.split("/").splice(1);
    const listRef = makeRef(listPath);
    console.log("reff", listRef);
    currentPage = listRef[listRef.length - 1];
    localization = listRef;
  }
  if (!(localization && localization.length > 0)) {
    return <></>;
  } else {
    return (
      <header className="top-header-container">
        <Breadcrumbs aria-label="breadcrumb">
          {localization.map((element,index) => (
            <Link
            key={index+1}
              style={{ color: "#bcbcbc" }}
              href={element.href}
              onClick={handleClick}
            >
              {"" + element.page}
            </Link>
          ))}
          <Typography style={{ color: "#ffffff" }}>
            {" "}
            {currentPage?.page || ""}
          </Typography>
        </Breadcrumbs>

        <h2 variant="h6">
          {subtitulo || "Subtitlex"}
        </h2>
      </header>
    );
  }
};

export default TopHeader;
