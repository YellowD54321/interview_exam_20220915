import React from "react";
import { sotreData } from "../../storeData";
import "./storePage.css";

const StorePage = () => {
  const LevelCharacter = [
    "ZERO",
    "ONE",
    "TWO",
    "THREE",
    "FOUR",
    "FIVE",
    "SIX",
    "SEVEN",
    "EIGHT",
    "NINE",
    "TEN",
  ];
  const SequenceCharacter = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const QualityImageUrl = {
    gold: "./images/certificateA.png",
    silver: "./images/certificateD.png",
  };
  const storeList = sotreData.map((store, index) => {
    return (
      <div className="store-page-store">
        <div className="store-page-store-sequence-region">
          <img
            src={QualityImageUrl[store.quality]}
            alt=""
            className="store-page-store-quality-image"
          />
          <div className="store-page-store-sequence-text">
            {SequenceCharacter[index]}
          </div>
        </div>
        <div className="store-page-store-levle">
          {LevelCharacter[store.level]}
        </div>
        <div className="store-page-store-name">{store.name}</div>
      </div>
    );
  });
  return (
    <div className="store-page-main">
      <div className="store-page-store-list">{storeList}</div>
    </div>
  );
};

export default StorePage;
