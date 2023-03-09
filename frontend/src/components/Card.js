import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import axios from 'axios';
import "../index.css";
import Personn from "./Person";

const Card = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios
      .get("http://localhost:7080/user")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }, 2000);
  }, []);

  const deleteUser = (id) => {
    setUsers((prevState) => prevState.filter((entry) => entry.id !== id));
  };

  const updateUser = (id, data) => {
    setUsers((prevState) =>
      prevState.map((entry) => {
        if (entry.id === id) return { ...entry, ...data };
        return entry;
      })
    );
  };

  if (users.length === 0) {
    return (
      <div>
        <div className="spinner">
          <div className="bounce1" />
          <div className="bounce2" />
          <div className="bounce3" />
        </div>
      </div>
    );
  }

  return (
    <Row>
      {users.map((user) => (
        <Col xs={24} sm={24} md={8} lg={8} xl={6} key={user.username}>
          <Personn
            user={user}
            deleteUser={deleteUser}
            updateUser={updateUser}
          />
        </Col>
      ))}
    </Row>
  );
};

export default Card;
