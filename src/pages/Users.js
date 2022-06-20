import { React, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      var res = await fetch("http://localhost:4000/cost-manager/users");
      res = await res.json();
      setUsers(res);
    }
    fetchMyAPI();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <div className="users-container">
        {users.map((user) => {
          return (
            <div className="user-card" key={user.user_id}>
              <Card
                bg={"light"}
                key={"light"}
                text={"dark"}
                style={{ width: "18rem" }}
                className="mb-2"
              >
                <Card.Header style={{ fontSize: "22px", fontWeight: "bold" }}>
                  {user.first_name} {user.last_name}
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    User ID: {user.user_id}
                    <br />
                    Birthday: {user.birthday} <br />
                    Total sum: {user.total_sum} ILS
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
