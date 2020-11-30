import { Chessboard } from "./Chessboard"
import { useState } from "react"

export const App = () => {
    const [turn, setTurn] = useState("W");

    return (
        <>
            <h1 style={{
                textAlign: "center"
            }}>
                {`Chess: ${turn === "W" ? "White's" : "Black's"} Turn`}
            </h1>
            <Chessboard turn={turn} setTurn={setTurn} />
            <p style={{ textAlign: "center" }}>
                <b>Notes</b>: En passant and castling not allowed.
                You are able to move into check, no warnings!
                Win the game by taking the enemy king
            </p>
        </>
    );
}