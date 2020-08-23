import React, { useState } from "react";
import Agreement from "./Agreement";
import Puzzle from "./Puzzle";
import sea from "../assets/sea.jpg";
import Questions from "./Questions";

const IMAGES = [
  { id: "sea", src: sea, rotation: 0 },
  { id: "sea1", src: sea, rotation: 0 },
  { id: "sea2", src: sea, rotation: 0 },
  { id: "sea3", src: sea, rotation: 0 },
];

function App() {
  const [images, setImages] = useState(IMAGES);
  const [step, setStep] = useState("1");
  // const [step, setStep] = useState("Agreement");
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

  return (
    <>
      {step === "1" && <Questions onDone={() => setStep("Next")} />}

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
    </>
  );
}

export default App;
