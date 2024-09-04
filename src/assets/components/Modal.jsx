import React, { useState } from "react";
import { Button, Modal } from "antd";
const AppModal = ({ card }) => {
  const { props } = card;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="" onClick={showModal}>
        {card}
      </div>
      <Modal
        title="Image preview"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <img src={props.data.url} className="w-full h-full" alt="" />
      </Modal>
    </>
  );
};
export default AppModal;
