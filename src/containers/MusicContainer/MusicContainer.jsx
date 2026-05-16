import { useState } from "react";
import { faDrum, faMusic } from "@fortawesome/free-solid-svg-icons";
import * as styles from "./styles.module.css";
import { courgette } from "@/utils/font.util";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Audio from "@/components/Audio/Audio";

function MusicContainer() {
  const [isPlaying, setPlaying] = useState(false);

  return (
    <>
      <Audio
        isPlaying={isPlaying}
        files={process.env.NEXT_PUBLIC_AUDIO_FILES?.split(",")}
      />
      <div className="flex justify-center items-center cursor-pointer">
        {!isPlaying && (
          <div onClick={() => setPlaying(true)}>
            <FontAwesomeIcon className="text-[#126DA6]" icon={faMusic} />
            <span
              className={`text-[#126DA6] pl-1 px-1 text-sm ${courgette.className}`}
            >
              {" "}
              Play
            </span>
            <FontAwesomeIcon
              className={`text-[#126DA6] ${styles.titleStroke}`}
              icon={faDrum}
            />
          </div>
        )}
        {isPlaying && (
          <div className="animate-bounce" onClick={() => setPlaying(false)}>
            <FontAwesomeIcon
              className={`text-[#126DA6] ${styles.titleStroke}`}
              icon={faDrum}
            />
            <FontAwesomeIcon
              className={`text-[#126DA6] px-1 ${styles.titleStroke}`}
              icon={faMusic}
            />
            <FontAwesomeIcon
              className={`text-[#126DA6] ${styles.titleStroke}`}
              icon={faDrum}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default MusicContainer;
