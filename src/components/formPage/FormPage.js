import React, { useState, useRef, useEffect } from "react";
import "./formPage.css";
import { sotreData } from "../../storeData";

const FormPage = () => {
  const DownArrowUrl = "./images/drop down.png";
  const RequiredText = "Required";
  const WrongFormatText = "Wrong Format";
  const SubmitButtonText = {
    Submit: "submit",
    Success: "success",
    Failure: "failure",
  };
  const SubmitButtonImageUrl = {
    Submit: "",
    Success: "./images/success.png",
    Failure: "./images/failure.png",
  };
  const submitButtonRef = useRef(null);
  const serverResponseSuccessInputRef = useRef(null);
  const serverResponseInformationRef = useRef(null);
  const [submitButton, setSubmitButton] = useState({
    text: SubmitButtonText.Submit,
    imageUrl: SubmitButtonImageUrl.Submit,
  });
  const [storeInpurText, setStoreInputText] = useState("");
  const [alertInfomation, setAlertInfomation] = useState({
    store: null,
    name: null,
    phone: null,
    consumption: null,
  });
  const [storeList, setStoreList] = useState(
    <ul className="form-page-form-store-list">
      {sotreData.map((store, index) => {
        return (
          <li
            key={index}
            className="form-page-form-store-item"
            onClick={() => handleStoreListClick(store.name)}
          >
            {store.name}
          </li>
        );
      })}
    </ul>
  );

  const changeStoreList = (text) => {
    let filteredStoreData = sotreData.filter((store) =>
      store.name.toLowerCase().includes(text.toLowerCase())
    );
    const NoResult = "no result";
    if (filteredStoreData.length <= 0) {
      filteredStoreData = [{ name: NoResult }];
    }
    const filteredStoreList = (
      <ul className="form-page-form-store-list">
        {filteredStoreData.map((store, index) => {
          return (
            <li
              key={index}
              className="form-page-form-store-item"
              onClick={
                store.name === NoResult
                  ? () => handleStoreListClick(text)
                  : () => handleStoreListClick(store.name)
              }
            >
              {store.name}
            </li>
          );
        })}
      </ul>
    );
    return filteredStoreList;
  };

  function handleStoreListClick(storeName) {
    const filteredStoreList = changeStoreList(storeName);
    setStoreInputText(storeName);
    setStoreList(filteredStoreList);
    setAlertInfomation((preValue) => {
      return {
        ...preValue,
        store: "",
      };
    });
  }

  const handleStoreInputChange = (event) => {
    const text = event.target.value;
    const filteredStoreList = changeStoreList(text);
    let newAlertInfomation = {};
    if (text === "") {
      newAlertInfomation = RequiredText;
    } else {
      newAlertInfomation = "";
    }
    setStoreInputText(text);
    setStoreList(filteredStoreList);
    setAlertInfomation((preValue) => {
      return {
        ...preValue,
        store: newAlertInfomation,
      };
    });
  };

  const handleNameInputChange = (event) => {
    const text = event.target.value;
    const Reg = new RegExp(/^[A-Za-z\u4e00-\u9fa5]+$/);
    let newAlertInfomation = {};
    if (text === "") {
      newAlertInfomation = RequiredText;
    } else if (!Reg.test(text)) {
      newAlertInfomation = WrongFormatText;
    } else {
      newAlertInfomation = "";
    }
    setAlertInfomation((preValue) => {
      return {
        ...preValue,
        name: newAlertInfomation,
      };
    });
  };

  const handlePhoneInputChange = (event) => {
    const text = event.target.value;
    const Reg = new RegExp(/^([09])+[0-9]+$/);
    let newAlertInfomation = {};
    if (text === "") {
      newAlertInfomation = RequiredText;
    } else if (!Reg.test(text) || text.length !== 10) {
      newAlertInfomation = WrongFormatText;
    } else {
      newAlertInfomation = "";
    }
    setAlertInfomation((preValue) => {
      return {
        ...preValue,
        phone: newAlertInfomation,
      };
    });
  };

  const handleConsumptionInputChange = (event) => {
    const text = event.target.value;
    const Reg = new RegExp(/^[0-9]+$/);
    let newAlertInfomation = {};
    if (text === "") {
      newAlertInfomation = RequiredText;
    } else if (!Reg.test(text)) {
      newAlertInfomation = WrongFormatText;
    } else {
      newAlertInfomation = "";
    }
    setAlertInfomation((preValue) => {
      return {
        ...preValue,
        consumption: newAlertInfomation,
      };
    });
  };

  const showFormInvalidInformation = (field, newAlertInfomation) => {
    setAlertInfomation((preValue) => {
      return {
        ...preValue,
        [field]: newAlertInfomation,
      };
    });
  };

  const isFormValid = () => {
    let result = true;
    Object.entries(alertInfomation).forEach(([field, value]) => {
      if (value !== "") {
        result = false;
      }
    });
    return result;
  };

  const showAllormInvalidInformation = () => {
    Object.entries(alertInfomation).forEach(([field, value]) => {
      if (value !== "") {
        showFormInvalidInformation(field, value ? value : RequiredText);
      }
    });
  };

  const canSubmitButton = () => {
    if (!isFormValid()) return false;
    if (submitButton.text !== SubmitButtonText.Submit) return false;
    return true;
  };

  const setSubmitButtonInvalidClass = (invalid) => {
    const InvalidClassName = "form-page-button-invalid";
    if (!submitButtonRef.current) return;
    if (invalid) {
      submitButtonRef.current.classList.add(InvalidClassName);
    } else {
      submitButtonRef.current.classList.remove(InvalidClassName);
    }
  };

  const setSubmitButtonText = (text) => {
    const imageUrl =
      SubmitButtonImageUrl[text.charAt(0).toUpperCase() + text.slice(1)];
    setSubmitButton({
      text: text,
      imageUrl: imageUrl,
    });
  };

  const setSubmitButtonState = (text) => {
    setSubmitButtonText(text);
    switch (text) {
      case SubmitButtonText.Submit:
        setSubmitButtonInvalidClass(false);
        setServerResponseInformation(false);
        break;
      case SubmitButtonText.Success:
        setSubmitButtonInvalidClass(true);
        setServerResponseInformation(false);
        break;
      case SubmitButtonText.Failure:
        setSubmitButtonInvalidClass(true);
        setServerResponseInformation(true);
        break;
      default:
        setSubmitButtonInvalidClass(false);
        setServerResponseInformation(false);
        break;
    }
  };

  const setServerResponseInformation = (display) => {
    const NotDisplayClassName = "form-page-not-display";
    const serverResponseInformation = serverResponseInformationRef.current;
    if (display) {
      serverResponseInformation.classList.remove(NotDisplayClassName);
    } else {
      serverResponseInformation.classList.add(NotDisplayClassName);
    }
  };

  const handleSubmitButtonClick = () => {
    if (!canSubmitButton()) {
      showAllormInvalidInformation();
      return;
    }
    const isServerResponseSuccess =
      serverResponseSuccessInputRef.current.checked;
    if (isServerResponseSuccess) {
      setSubmitButtonState(SubmitButtonText.Success);
    } else {
      setSubmitButtonState(SubmitButtonText.Failure);
    }
  };

  useEffect(() => {
    setSubmitButtonState(SubmitButtonText.Submit);
  }, [alertInfomation]);

  return (
    <div className="main-page form-page-main" id="form-page-form">
      <form className="form-page-form-main">
        <div className="form-page-form-title">
          <img
            src="./images/turtle.png"
            alt="turtle"
            className="form-page-form-turtle"
          />
          FORM
        </div>
        <div className="form-page-form-input-region">
          <div className="form-page-form-input-title-region">
            <label htmlFor="store" className="form-page-form-label">
              store
            </label>
            <p className="form-page-form-alert-information">
              {alertInfomation.store}
            </p>
          </div>
          <input
            name="store"
            value={storeInpurText}
            type="text"
            list="storeList"
            className="form-page-form-input form-page-form-store-input"
            placeholder="placeholder text"
            autoComplete="off"
            onChange={handleStoreInputChange}
          />
          {storeList}
          <img
            src={DownArrowUrl}
            alt="down arrow"
            className="form-page-form-input-arrow"
          />
        </div>
        <div className="form-page-form-input-region">
          <div className="form-page-form-input-title-region">
            <label htmlFor="name" className="form-page-form-label">
              name
            </label>
            <p className="form-page-form-alert-information">
              {alertInfomation.name}
            </p>
          </div>
          <input
            name="name"
            className="form-page-form-input form-page-form-name-input"
            placeholder="placeholder text"
            onChange={handleNameInputChange}
          />
        </div>
        <div className="form-page-form-input-region">
          <div className="form-page-form-input-title-region">
            <label htmlFor="phone" className="form-page-form-label">
              phone
            </label>
            <p className="form-page-form-alert-information">
              {alertInfomation.phone}
            </p>
          </div>
          <input
            name="phone"
            // type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            className="form-page-form-input form-page-form-phone-input"
            placeholder="placeholder text"
            onChange={handlePhoneInputChange}
          />
        </div>
        <div className="form-page-form-input-region">
          <div className="form-page-form-input-title-region">
            <label
              htmlFor="amount-of-consumption"
              className="form-page-form-label"
            >
              Amount of consumption
            </label>
            <p className="form-page-form-alert-information">
              {alertInfomation.consumption}
            </p>
          </div>
          <input
            name="amount-of-consumption"
            // type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            className="form-page-form-input form-page-form-amount-of-consumption-input"
            placeholder="placeholder text"
            onChange={handleConsumptionInputChange}
          />
        </div>
        <div className="form-page-form-input-region">
          <label htmlFor="payment" className="form-page-form-label">
            payment
          </label>
          <select
            name="payment"
            className="form-page-form-input form-page-form-payment-input"
            placeholder="placeholder text"
          >
            <option>digital payment</option>
            <option>ATM</option>
          </select>
          <img
            src={DownArrowUrl}
            alt="down arrow"
            className="form-page-form-input-arrow"
          />
        </div>
      </form>
      <button
        type="submit"
        className="form-page-submit-button form-page-button-invalid"
        ref={submitButtonRef}
        onClick={handleSubmitButtonClick}
      >
        <img
          src={submitButton.imageUrl}
          alt=""
          className="form-page-submit-image"
        />
        {submitButton.text}
      </button>
      <p
        className="form-page-server-response-information form-page-not-display"
        ref={serverResponseInformationRef}
      >
        This person does not exist
      </p>
      {/* Test server response */}
      <div className="form-page-server-response">
        <p>Server Response</p>
        <input
          type="radio"
          id="success"
          name="serverResponse"
          ref={serverResponseSuccessInputRef}
        />
        <label htmlFor="success">Success</label>
        <input type="radio" id="failure" name="serverResponse" />
        <label htmlFor="failure">Failure</label>
      </div>
    </div>
  );
};

export default FormPage;
