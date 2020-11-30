import { useState } from "react"
import { BoardSpot } from "./BoardSpot";


const fillBoard = () => {
    let tempBoard = Array(64).fill(" ");
    // Black Pieces
    tempBoard[0] = "B_R";
    tempBoard[1] = "B_N";
    tempBoard[2] = "B_B";
    tempBoard[3] = "B_Q";
    tempBoard[4] = "B_K";
    tempBoard[5] = "B_B";
    tempBoard[6] = "B_N";
    tempBoard[7] = "B_R";
    tempBoard[8] = "B_P";
    tempBoard[9] = "B_P";
    tempBoard[10] = "B_P";
    tempBoard[11] = "B_P";
    tempBoard[12] = "B_P";
    tempBoard[13] = "B_P";
    tempBoard[14] = "B_P";
    tempBoard[15] = "B_P";
    // White Pieces
    tempBoard[48] = "W_P";
    tempBoard[49] = "W_P";
    tempBoard[50] = "W_P";
    tempBoard[51] = "W_P";
    tempBoard[52] = "W_P";
    tempBoard[53] = "W_P";
    tempBoard[54] = "W_P";
    tempBoard[55] = "W_P";
    tempBoard[56] = "W_R";
    tempBoard[57] = "W_N";
    tempBoard[58] = "W_B";
    tempBoard[59] = "W_Q";
    tempBoard[60] = "W_K";
    tempBoard[61] = "W_B";
    tempBoard[62] = "W_N";
    tempBoard[63] = "W_R";
    return tempBoard
}

export const Chessboard = () => {
    const [board, setBoard] = useState(fillBoard());
    const [turn, setTurn] = useState("W");

    const movePiece = (start, end) => {
        let tempBoard = [...board];
        if (end > 55 && tempBoard[start][2] === "P") {
            alert("CHANGE OUT PAWN");
        }
        if (board[end][2] === "K") {
            alert("Game Over! " + board[end][0] === "W" ? "White Wins!" : "Black Wins!");
        }
        tempBoard[end] = tempBoard[start];
        tempBoard[start] = " ";
        setBoard(tempBoard);
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "70%",
            margin: "0 auto"
        }} >
            {
                board.map((value, index) => {
                    return (
                        <BoardSpot
                            board={board}
                            turn={turn}
                            setTurn={setTurn}
                            move={movePiece}
                            piece={value}
                            index={index}
                            key={"boardSpot" + index} />
                    )
                })
            }
        </div>
    )
}