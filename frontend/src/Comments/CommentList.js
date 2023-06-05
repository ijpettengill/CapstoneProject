import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CommentCard from "./CommentCard";
import "./CommentList.css";
import { v4 as uuidv4 } from "uuid";

// ##########################################################
// CommentList: display the list of comment
//
// Params:
//        list_msg: is the list of comment that will be display
//

const CommentList = ({ list_msg }) => {
  return (
    <>
      <div className="comment_holder" style={{ marginTop: "20px" }}>
        <h1>Comments</h1>
        <div
          className="somePetDetail2"
          style={{ width: "90%", marginTop: "-20px" }}
        ></div>
        {list_msg
          ? list_msg.map((c) => <CommentCard key={uuidv4()} comment={c} />)
          : ""}
        {list_msg.length === 0 ? (
          <h2 style={{ fontSize: "18px" }}>
            0 comments yet. Be the first to comment
          </h2>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CommentList;