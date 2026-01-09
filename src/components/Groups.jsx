
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
              <div className="team-left">
                <img src={team.flag} alt={team.name} />
                <span>{team.name}</span>
              </div>
{/* 
              <div className="team-right">
                <span className="gd">{team.gd > 0 ? `+${team.gd}` : team.gd}</span>
                <span className="pts">{team.pts}</span>
              </div> */}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
