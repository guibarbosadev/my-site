import { useCallback, useState } from "react";
import Image, { ImageProps } from "next/image";
import styles from "./ZoomableImage.module.css";

type Props = Omit<ImageProps, "src"> & { src: string };

export default function ZoomableImage({ alt = "", ...props }: Props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = useCallback(() => setIsModalVisible(true), []);
  const closeModal = useCallback(() => setIsModalVisible(false), []);

  return (
    <>
      <Image
        {...props}
        style={{ cursor: "pointer", ...props.style }}
        alt={alt}
        onClick={openModal}
      />
      {isModalVisible && (
        <div className={styles.modal} onClick={closeModal}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            {...props}
            className={styles.image}
            style={{ objectFit: "scale-down" }}
            alt={alt}
            onClick={(event) => event.stopPropagation()}
          />
          <span className={styles.btnClose} onClick={closeModal}>
            &times;
          </span>
        </div>
      )}
    </>
  );
}
