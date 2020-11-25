import React from 'react';

function FormContainer(props)
{
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={props.firstName}
          onChange={props.handleChange}
        />
        <br/>
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={props.lastName}
          onChange={props.handleChange}
        />
        <br/>
        <input
          type="number"
          placeholder="age"
          name="age"
          value={props.age}
          onChange={props.handleChange}
        />
        <br/>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={props.handleChange}
          />
          Male
        </label>
        <br/>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={props.handleChange}
          />
          Female
        </label>
        <br/>

        <select 
          name="destination" 
          value={props.destination} 
          onChange={props.handleChange}
        >
          <option value="Thailand">Thailand</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Germany">Germany</option>
          <option value="South Pole">South Pole</option>
          <option value="Caribe">Caribe</option>
        </select>
        <br/>

        <label>
          <input
            type="checkbox"
            name="isVegan"
            onChange={props.handleChange}
            checked={props.diateryRestriction.isVegan}
          /> Vegan?
        </label>
        <br/>

        <label>
          <input
            type="checkbox"
            name="isKosher"
            onChange={props.handleChange}
            checked={props.diateryRestriction.isKosher}
          /> Kosher?
        </label>
        <br/>

        <label>
          <input
              type="checkbox"
              name="isLactoseFree"
              onChange={props.handleChange}
              checked={props.diateryRestriction.isLactoseFree}
          /> Lactose Free?
        </label>
        <br/>

        <button type="submit">Submit</button>
      </form>
      <hr/>
      <h1>Entered Information:</h1>
      <p>Your Name: {props.firstName} {props.lastName}</p>
      <p>Your Age: {props.age}</p>
      <p>Your Gender: {props.gender}</p>
      <p>Your Destination: {props.destination}</p>
      <p>Dietary restrictions: </p>
      <p>Vegan: {props.diateryRestriction.isVegan ?'Yes':'No'}</p>
      <p>Kosher: {props.diateryRestriction.isKosher ?'Yes':'No'}</p>
      <p>Lactose Free: {props.diateryRestriction.isLactoseFree?'Yes':'No'}</p>
    </div>
  );
}

export default FormContainer;