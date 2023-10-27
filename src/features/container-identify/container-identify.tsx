import { HiLockClosed, HiLockOpen } from "react-icons/hi";
import { StatusCard } from "./shared/status-card";
import * as tmImage from "@teachablemachine/image";
import { useEffect } from "react";

export const ContainerIdentify = () => {
  let webcam, model, maxPredictions, labelContainer;

  async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
  }

  const init = async () => {
    webcam = new tmImage.Webcam(300, 500, true);

    await webcam.setup();
    await webcam.play();
    window.requestAnimationFrame(loop);
    document.getElementById("webcam-container").appendChild(webcam.canvas);

    console.log({ webcanvas: webcam.canvas, webcam });
  };

  async function predict() {}

  useEffect(() => {
    init();
  }, []);

  const authorized = false;
  return (
    <div className="bg-slate-100 h-screen flex items-center justify-center flex-col">
      <div className=" max-w-[700px] w-full p-5 flex gap-2">
        <div
          className="flex-1 bg-white rounded-lg h-[400px] flex items-center justify-center overflow-hidden"
          id="webcam-container"
        ></div>
        <div className="flex-1 flex">
          {authorized ? (
            <StatusCard title="Autorizado" icon={<HiLockOpen size={55} />} />
          ) : (
            <StatusCard
              title="Não autorizado"
              icon={<HiLockClosed size={55} />}
            />
          )}
        </div>
      </div>
    </div>
  );
};
