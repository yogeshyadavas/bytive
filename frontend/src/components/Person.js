import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Modal, Form, Input } from "antd";
import {
  HeartOutlined,
  EditOutlined,
  DeleteOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const layout = {
  labelCol: {
    flex: "0 0 8em",
  },
  wrapperCol: {
    flex: "1",
  },
};

const Personn = ({ user, deleteUser, updateUser }) => {
  const [liked, setLiked] = useState(false);
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);

  const toggleLiked = () => {
    setLiked((prevState) => !prevState);
  };
  const handleOk = () => {
    form.validateFields().then((values) => {
      updateUser(user.id, values);
      closeModal();
    });
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        open={modalVisible}
        onOk={handleOk}
        onCancel={closeModal}
      >
        <Form {...layout} form={form} initialValues={user}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "This field is required" },
              { type: "email", message: "Invalid email" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Website"
            name="website"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <Card
        style={{ margin: 15 }}
        cover={
          <div className="cardHeadImage">
            <img
              src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
              alt="Avatar"
              style={{ width: 200, height: 200 }}
            />
          </div>
        }
        actions={[
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              outline: "none",
            }}
          >
            <HeartOutlined
              style={{ color: liked ? "#FF0000" : "inherit", fontSize: 20 }}
              onClick={toggleLiked}
            />
          </button>,

          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              outline: "none",
            }}
            onClick={openModal}
          >
            <EditOutlined style={{ fontSize: 18 }} />
          </button>,
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              outline: "none",
            }}
            onClick={() => {
              deleteUser(user.id);
            }}
          >
            <DeleteOutlined theme="filled" style={{ fontSize: 18 }} />
          </button>,
        ]}
      >
        <h3>{user.name}</h3>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <MailOutlined style={{ fontSize: "18px" }} />
          <p style={{ marginLeft: 10 }}>{user.email}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <PhoneOutlined style={{ fontSize: "18px" }} />
          <p style={{ marginLeft: 10 }}>{user.phone}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <GlobalOutlined style={{ fontSize: "18px" }} />
          <p style={{ marginLeft: 10 }}>{user.website}</p>
        </div>
      </Card>
    </>
  );
};

Personn.propTypes = {
  user: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default Personn;
