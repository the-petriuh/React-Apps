import React, { Component } from 'react';
import Header from './Header';
import '../style/style.css';

class MemeGenerator extends Component
{
  constructor()
  {
    super();
    this.state = {
      topText: '',
      bottomText: '',
      randomImg: 'http://i.imgflip.com/1bij.jpg',
      allMemesImg: []
    };
  }

  componentDidMount()
  {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        this.setState({ allMemesImg: response.data.memes })
      });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  randomMeme = (event) => {
    const randInt = Math.floor(Math.random() * 100)
    const randomMeme = this.state.allMemesImg[randInt].url;
    this.setState({
      randomImg: randomMeme
    });
    event.preventDefault();
  }

  render()
  {
    return (
      <div>
        <Header />
        <form className="meme-form">
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />

          <button onClick={this.randomMeme}>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt=""/>
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;