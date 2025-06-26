import { useState } from "react";

export function UseModal(images: { src: string }[]) {
  const [modalImg, setModalImg] = useState<string | null>(null);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const openModal = (src: string, idx: number) => {
    setModalImg(src);
    setModalIndex(idx);
  };

  const closeModal = () => {
    setModalImg(null);
    setModalIndex(null);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalIndex !== null && modalIndex > 0) {
      setModalImg(images[modalIndex - 1].src);
      setModalIndex(modalIndex - 1);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (
      modalIndex !== null &&
      modalIndex < images.length - 1
    ) {
      setModalImg(images[modalIndex + 1].src);
      setModalIndex(modalIndex + 1);
    }
  };

  return {
    modalImg,
    modalIndex,
    openModal,
    closeModal,
    prevImage,
    nextImage,
  };
}