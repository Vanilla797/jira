import SerchPanel from "./serch-panel";
import List from "./list";

const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("").then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [param]);
  return (
    <div>
      <SerchPanel />
      <List />
    </div>
  );
};
export default ProjectListScreen;
