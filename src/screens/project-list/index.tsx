import SerchPanel from "./serch-panel";
import List from "./list";
import { useState, useEffect } from "react";
import React from "react";
import * as qs from "qs";
import cleanObject, { useDebounce, useMount } from "../../utils";
import { useHttp } from "utils/http";
const apiUrl = process.env.REACT_APP_API_URL;

const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const deBouncedParam = useDebounce(param, 300);

  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const client = useHttp();
  useEffect(() => {
    client("projects", { data: cleanObject(deBouncedParam) }).then(setList);
  }, [deBouncedParam]);
  useMount(() => {
    client("users").then(setUsers);
  });

  return (
    <div>
      <SerchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
export default ProjectListScreen;
