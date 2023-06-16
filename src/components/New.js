import { Helmet } from "react-helmet";
import { useForm } from 'react-hook-form';
import { useState } from "react";

function New() {
  const [agent, setAgent] = useState(null);
  const [active, setActive] = useState(false)

  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = (data) => {
    setAgent(data);
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 3000);
  };
  return (
    <main className="container flex formMain">
      <Helmet>
        <title>New | Agents</title>
      </Helmet>
      <div>
        <form className="flex" onSubmit={handleSubmit(onSubmit)}>
          <h2>Create New Agent</h2>
          <div className="textInp">
            <input type="text" placeholder="Display Name" { ...register("displayName", {required: true, maxLength: 15})} />
            {errors.displayName && errors.displayName.type === 'required' && <p className="errMessage">Display name is required.</p>}
            {errors.displayName && errors.displayName.type === 'maxLength' && <p className="errMessage">Must be less than 15 characters</p>}
            
          </div>
          <select  {...register("role", {required: true})}>
            <option selected value="Controller">Controller</option>
            <option value="Duelist">Duelist</option>
            <option value="Initiator">Initiator</option>
            <option value="Sentinel">Sentinel</option>
          </select>
          {errors.role && <p className="errMessage">Role is required</p>}
          <div className="textInp">
            <textarea placeholder="Description..." {...register("description", {required: false, maxLength: 50})}></textarea>
            {errors.description && <p>Must be less than 50 characters</p>}
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className={`${active ? "notify" : ""} notification`}>
        <p>Created</p>
      </div>
    </main>
  )
}

export default New;