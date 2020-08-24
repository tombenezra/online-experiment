import React, { useState, Suspense } from "react";
import "../i18n";
import Language from "./Language";
import Agreement from "./Agreement";
import Puzzle from "./Puzzle";
import sea from "../assets/sea.jpg";
import Questions from "./Questions";
import { useTranslation } from "react-i18next";

const IMAGES = [
  { id: "sea", src: sea, rotation: 0 },
  { id: "sea1", src: sea, rotation: 0 },
  { id: "sea2", src: sea, rotation: 0 },
  { id: "sea3", src: sea, rotation: 0 },
];

function App() {
  const [images, setImages] = useState(IMAGES);
  const [step, setStep] = useState("Language");
  const [selectedImage, setSelectedImage] = useState(null);

  const rotate = (deg) => {
    if (!selectedImage) return;
    const newImages = images.map((img) => {
      if (img.id === selectedImage)
        return Object.assign({}, img, { rotation: img.rotation + deg });
      return img;
    });
    setImages(newImages);
  };

  // loading component for suspense fallback
  const Loader = () => (
    <div className="App">
      <div>loading...</div>
    </div>
  );

  const { i18n } = useTranslation("global");
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <Suspense fallback={<Loader />}>
      {step === "Language" && <Language onLanguage={lng => {
        changeLanguage(lng)
        setStep("Agreement")
      }} />}
      {step === "Agreement" && <Agreement onSubmit={() => setStep("Puzzle")} />}
      {step === "Puzzle" && (
        <Puzzle
          images={images}
          onImageClick={setSelectedImage}
          selectedImage={selectedImage}
          onRotate={rotate}
          onDone={() => setStep("Questions")}
        />
      )}
      {step === "Questions" && <Questions onDone={() => setStep("Next")} />}
      {step === "Next" && <Questions />}
    </Suspense>
  );
}

export default App;
