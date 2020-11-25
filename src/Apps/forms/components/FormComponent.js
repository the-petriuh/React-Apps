import React from 'react';
import FormContainer from './FormContainer';

class Forms extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      diateryRestriction: {
          isVegan: false,
          isKosher: false,
          isLactoseFree: false
      }
    };
  }

    handleChange = (event) => {
      const { name, value, type, checked } = event.target;
      type === 'checkbox' ?
        this.setState(prevState => {
          return {
            diateryRestriction: {
              ...prevState.diateryRestriction,
              [name]: checked
            }
          }
        })
        :
        this.setState({ [name]: value} );
    }

  render()
  {
    return (
      <FormContainer handleChange={this.handleChange} {...this.state}/>
    );
  }
}

export default Forms;