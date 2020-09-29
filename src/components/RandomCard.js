import React, { Component } from "react";
import { connect } from "react-redux";
import {
  excludeCurrent,
  moveToShown,
  setStartBoolean,
  showHiddenCard,
  setSuccessBoolean,
  firstStartChange,
  resetGame,
} from "../store/actions";
import "./css/cardboard.css";

class RandomCard extends Component {
  state = {
    image: null,
    number: null,
    sign: null,
  };

  componentDidMount() {
    // !this.props.firstStart && this.loadImage();
    // this.props.firstStartChange(false);
    console.log("start");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.firstStart !== this.props.firstStart) {
      this.props.firstStart == true && this.loadImage();
      this.props.firstStartChange(false);
    }
    if (prevProps.reset !== this.props.reset) {
      this.props.reset == true && this.loadImage();
      this.props.resetGame(false);
    }
    // this.props.success == alert("s");
    if (prevProps.success !== this.props.success) {
      this.props.success && this.loadImage();
      this.props.setSuccessBoolean(false);
    }

    // if (
    //   prevProps.success2 !== this.props.success2 &&
    //   this.props.success2 == true
    // ) {
    //   this.props.success2 == true && this.loadImage();
    //   this.props.setSuccessBoolean2(false);
    // }

    // this.props.hiddenCard == true &&
    //   setTimeout(() => {
    //     if (prevProps.hiddenCard !== this.props.hiddenCard) {
    //       this.props.showHiddenCard(false);
    //       this.props.setStartBoolean(false);
    //     }
    //   }, 2000);
  }

  log = () => {
    console.log(this.props.notShown);
  };

  logShown = () => {
    console.log(this.props.shown);
    // console.log(this.props.guessedCards);
  };

  compareNewCard = () => {
    console.log(this.props.shown);
  };

  loadImage = () => {
    const index = Math.floor((this.props.notShown.length - 1) * Math.random());
    const card = this.props.notShown[index];
    const num = card.number;
    const cardSign = card.sign;
    this.props.excludeCurrent(card.id);
    let isItSmallerProp = { smaller: "smaller", bigger: "bigger" };
    this.props.moveToShown({ ...card, isItSmallerProp });
    this.props.setStartBoolean(false);

    import(`../images/cards/${card.number}_of_${card.sign}.svg`).then(
      (image) => {
        this.setState({
          image: image,
          number: num,
          sign: cardSign,
        });
      }
    );
    console.log("made");
  };
  render() {
    const { image } = this.state;
    return (
      <div>
        <button onClick={this.log}>see rest</button>
        <button onClick={this.logShown}>see shown</button>
        {image && <img src={image} alt="" className="randomCard" />}
        <p className="text-left">{this.state.number}</p>
        <p className="text-left">{this.state.sign}</p>
      </div>
    );
  }
}

const mapStateToProps = ({
  cards,
  notShown,
  shown,
  start,
  hiddenCard,
  success,
  success2,
  firstStart,
  reset,
  guessedCards,
}) => ({
  cards,
  notShown,
  shown,
  start,
  hiddenCard,
  success,
  success2,
  firstStart,
  reset,
  guessedCards,
});
const mapDispatchToProps = {
  excludeCurrent,
  moveToShown,
  setStartBoolean,
  showHiddenCard,
  setSuccessBoolean,
  firstStartChange,
  resetGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomCard);
