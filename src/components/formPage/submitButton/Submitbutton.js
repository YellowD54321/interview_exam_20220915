import React, { useState, useEffect, useRef } from "react";

const Submitbutton = ({
  RequiredText,
  alertInfomation,
  showFormInvalidInformation,
  serverResponseInformationRef,
  serverResponseSuccessInputRef,
}) => {
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
  const [submitButton, setSubmitButton] = useState({
    text: SubmitButtonText.Submit,
    imageUrl: SubmitButtonImageUrl.Submit,
  });

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
    <div>
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
    </div>
  );
};

export default Submitbutton;
