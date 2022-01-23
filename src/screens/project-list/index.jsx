import SerchPanel from "./serch-panel";
import List from "./list";
import { useState, useEffect } from "react";
import React from "react";
import * as qs from "qs";
import cleanObject from "../../utils";
const apiUrl = process.env.REACT_APP_API_URL;

const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      }
    );
  }, [param]);
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, [param]);

  return (
    <div>
      <SerchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
export default ProjectListScreen;
