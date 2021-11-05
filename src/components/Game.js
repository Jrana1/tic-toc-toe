import React from 'react';

const Game = ({ player1Status, player2Status }) => {
    //console.log(player1Status, player2Status);
    const HandleBoxText = (e) => {

        if (player1Status) {
            e.target.innerText = "X";
        }
        if (player2Status) {
            e.target.innerText = "O";
        }

    }
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", width: "20%", gridGap: "10px" }} onClick={HandleBoxText}>
            <div className="box"><p></p></div>
            <div className="box"><p></p></div>
            <div className="box"><p></p></div>
            <div className="box"><p></p></div>
            <div className="box"><p></p></div>
            <div className="box"><p></p></div>
            <div className="box"><p></p></div>
            <div className="box"><p></p></div>
            <div className="box"><p></p></div>
            <div className="box"><p></p></div>
            <div className="box"><p></p></div>
            <div className="box"><p></p></div>
            <div className="box"><p></p></div>
            <div className="box"><p></p></div>
            <div className="box"><p></p></div>
            <div className="box"><p></p></div>
        </div>
    );
};

export default Game;