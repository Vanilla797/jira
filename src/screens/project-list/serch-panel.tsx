import React from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organizaion: string;
}
interface SerchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SerchPanelProps["param"]) => void;
}

const SerchPanel = ({ users, param, setParam }: SerchPanelProps) => {
  return (
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(evt) => setParam({ ...param, name: evt.target.value })}
        />
        <select
          value={param.personId}
          onChange={(evt) =>
            setParam({ ...param, personId: evt.target.value })
          }>
          <option value="">负责人</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default SerchPanel;