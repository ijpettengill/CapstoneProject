import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./MessagesList.css";
import MessagesCard from "./MessagesCard";
import AdoptAPetApi from "../API/Api";
import { v4 as uuidv4 } from "uuid";

// ##########################################################
// MessagesList: Comment list that render MessagesCard to show all the comments
//

const MessagesList = () => {
  const [comment, setComment] = useState();
  useEffect(function PreLoadInfo() {
    async function getInitialPet() {
      getPetAndOrganization();
    }
    getInitialPet();
  }, []);

  async function getPetAndOrganization() {
    try {
      let respComment = await AdoptAPetApi.getLastComments();
      setComment(respComment);
    } catch (errors) {
      console.log(errors);
    }
  }

  return (
    <>
      {comment && comment.length != 0 ? (
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner carousellHolder">
            <div style={{ marginLeft: "16%" }}>
              {/* FOR THE CAROUSEL TO WORK HAS TO STAR ON A ACTIVE FIRST AND THEN RUN THE COROUSEL ITEMS
            
            SOOOOOO

            <div class="carousel-item active">
              <MessagesCard src={msg[0].img} name={msg[0].name msg={msg[0].msg}/>
            </div>

            THEN
            
            msg.map( m => {
                <>
                    <div class="carousel-item">
                        <MessagesCard src={m.img} name={m.name} msg={m.msg}/>
                    </div>
                </>
            } )

            <div class="carousel-item">
            </div>

            
            */}

              <div key={uuidv4()} className="carousel-item active">
                <MessagesCard
                  src={
                    JSON.parse(comment[0].pet_info).primary_photo_cropped.small
                  }
                  name={comment[0].first_name + " " + comment[0].last_name}
                  msg={comment[0].msg_body}
                  pet_id={JSON.parse(comment[0].pet_info).id}
                  pet_name={JSON.parse(comment[0].pet_info).name}
                />
              </div>
              {comment.slice(1).map((msg) => (
                <div key={uuidv4()} className="carousel-item">
                  <MessagesCard
                    src={JSON.parse(msg.pet_info).primary_photo_cropped.small}
                    name={msg.first_name + " " + msg.last_name}
                    msg={msg.msg_body}
                    pet_id={JSON.parse(msg.pet_info).id}
                    pet_name={JSON.parse(msg.pet_info).name}
                  />
                </div>
              ))}
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="arrowIcon1">
              <FontAwesomeIcon
                className="arrowIcon1"
                style={{
                  fontSize: "40px",
                }}
                icon={faArrowLeft}
              />
            </span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="arrowIcon1">
              <FontAwesomeIcon
                style={{
                  fontSize: "40px",
                }}
                icon={faArrowRight}
              />
            </span>
          </a>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MessagesList;