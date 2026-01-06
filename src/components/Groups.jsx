import "../styles/groups.css";
import { groups } from "../data/groupsData";

export default function Groups() {
  return (
    <section className="groups">
      {groups.map((group, index) => (
        <div className="group-card" key={index}>
          <h3>{group.name}</h3>
          {group.teams.map((team, i) => (
            <div className="team" key={i}>
              <span>{team.name}</span>
              {/* <span>{team.gd}</span>
              <span>{team.pts}</span> */}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
