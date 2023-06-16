import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Catalog(props) {
  const [agents, setAgents] = useState([]);
  const [sort, setSort] = useState('sort');
  const sortMethod = {
    sort: { method: (a, b) => null },
    name: { method: (a, b) => {
      const nameA = a.displayName.toUpperCase();
      const nameB = b.displayName.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }},
    role: { method: (a, b) => {
      const roleA = a.role.displayName.toUpperCase();
      const roleB = b.role.displayName.toUpperCase();
      if (roleA > roleB) {
        return 1;
      }
      if (roleA < roleB) {
        return -1;
      }
      return 0;
    }}
  }

  useEffect(() => {
    axios.get(props.url).then(res => {setAgents(res.data.data.filter((a) => {
      return a.isPlayableCharacter;
    }))});
  }, [sort]);

  function ClickHandler(event) {
    if(event.target.innerText == 'Sort') {
      event.target.innerText = 'Name';
      setSort(event.target.innerText.toLowerCase());
    } else if (event.target.innerText == 'Name') {
      event.target.innerText = 'Role';
      setSort(event.target.innerText.toLowerCase());
    } else if (event.target.innerText == 'Role') {
      event.target.innerText = 'Sort';
      setSort(event.target.innerText.toLowerCase());
    }
  }

  return (
    <div className='agents flex'>
      {agents.sort(sortMethod[sort].method).map((agent) => {
        if (agent.isPlayableCharacter) {
          return (
            <Link to={`/valorant-agents/details/${agent.uuid}`}>
              <div className='card'>
                <div className='descrOverlay'>
                  <h2 className='name'>{agent.displayName}</h2>
                  <h3 className='roleName'>{agent.role.displayName}</h3>
                  <div className='abilities flex'>
                    <div className='flex abilityOverlay'>
                      {agent.abilities.map((ability) => {
                        if (ability.slot != "Passive")
                        return (
                          <img className='abilityImg' src={ability.displayIcon} alt={ability.displayName} />
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className='imageBG flex' style={{backgroundImage: `url(${agent.background})`}}>
                  <div className='overlay'></div>
                  <div className='index flex'>
                    <img className='agentImage' src={agent.fullPortrait} alt={agent.displayName} />
                  </div>
                </div>
              </div>
            </Link>
          )
        }
      })}
      <button className='sortButton' onClick={ClickHandler} value={"Sort"}>Sort</button>
    </div>
  )

}

export default Catalog;