import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

function Detail(props) {
  const [agent, setAgent] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${props.url}/${id}`).then(res => {setAgent(res.data.data)});
  }, []);

  return (
    <main>
      <Helmet>
        <title>
          {agent?.displayName || "Loading..."} | Details
        </title>
      </Helmet>

      <div className="agentCard">
        <div className="banner">
          <div className="detailCard" style={{backgroundImage: `url(${agent?.background || ""})`}}>
            <div className="detailOverlay"></div>
            <div className="fullImg">
              <img src={agent?.fullPortrait || ""} alt={agent?.displayName || ""} />
            </div>
          </div>
        </div>
        <div className="details container">
          <h2>{agent?.displayName || ""}</h2>
          <div className="roleDisplay flex">
            <div className="roleIcon">
              <img src={agent?.role.displayIcon || ""} alt={agent?.displayName || ""} />
            </div>
            <h3>{agent?.role.displayName || ""}</h3>
            <p>{agent?.role.description || ""}</p>
          </div>
          <p className="descr">{agent?.description || ""}</p>
        </div>
        <div className="abilityDisplay flex">
          {agent?.abilities.map((ability) => {
            if (ability.slot != 'Passive') {
              return (
                <div className="ability container">
                  <div className="abilityTitle flex">
                    <img src={ability.displayIcon} alt={ability.displayName} />
                    <h4>{ability.displayName}</h4>
                  </div>
                  <p>{ability.description}</p>
                </div>
              )
            }
            return "";
          }) || ""}
        </div>
      </div>
    </main>
  )
}

export default Detail;