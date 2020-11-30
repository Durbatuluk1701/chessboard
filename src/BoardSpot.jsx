const pieceTranslator = (pieceValue) => {
    const translation = {
        "W": {
            "K": "/ChessPieces/WhiteKing.png",
            "Q": "/ChessPieces/WhiteQueen.png",
            "B": "/ChessPieces/WhiteBishop.png",
            "N": "/ChessPieces/WhiteKnight.png",
            "R": "/ChessPieces/WhiteRook.png",
            "P": "/ChessPieces/WhitePawn.png"
        },
        "B": {
            "K": "/ChessPieces/BlackKing.png",
            "Q": "/ChessPieces/BlackQueen.png",
            "B": "/ChessPieces/BlackBishop.png",
            "N": "/ChessPieces/BlackKnight.png",
            "R": "/ChessPieces/BlackRook.png",
            "P": "/ChessPieces/BlackPawn.png"
        }
    }
    let piecePart = pieceValue.split("_");
    return pieceValue.length > 2 ? translation[piecePart[0]][piecePart[1]] : "/ChessPieces/Blank.png";
}

export const BoardSpot = ({ board, piece, index, move, turn, setTurn, prevIndex, setPrevIndex }) => {
    let currentBackground = ((index + Math.floor(index / 8)) % 2 === 0) ? "white" : "grey";

    const possibleMoves = (pieceValue, index) => {
        let validIndexes = [];
        let myPiece = pieceValue[0];
        let enemyPiece = myPiece === "W" ? "B" : "W";
        switch (pieceValue[2]) {
            case "P":
                // First move!
                let firstMove = myPiece === "W" ? index > 47 : index < 15;
                if (firstMove) {
                    let move2 = myPiece === "W" ? index - 16 : index + 16;
                    if (board[move2][0] === " ") {
                        validIndexes.push(move2);
                    }
                }
                // Only can move straight forward if empty
                let move1 = myPiece === "W" ? index - 8 : index + 8;
                if (board[move1][0] === " ") {
                    validIndexes.push(move1);
                }
                // Check attack Down Right
                let attack1 = myPiece === "W" ? index - 9 : index + 9;
                if (board[attack1][0] === enemyPiece) {
                    validIndexes.push(attack1);
                }
                // Check attack down left
                let attack2 = myPiece === "W" ? index - 7 : index + 7;
                if (board[attack2][0] === enemyPiece) {
                    validIndexes.push(attack2);
                }
                break;
            case "R":
                let rookIndex = index;
                // Going down
                while (rookIndex < 56) {
                    if (board[rookIndex + 8][0] === myPiece) {
                        break;
                    } else if (board[rookIndex + 8][0] === enemyPiece) {
                        validIndexes.push(rookIndex + 8);
                        break;
                    }
                    validIndexes.push(rookIndex + 8);
                    rookIndex += 8;
                }
                rookIndex = index;
                // Going up
                while (rookIndex > 7) {
                    if (board[rookIndex - 8][0] === myPiece) {
                        break;
                    } else if (board[rookIndex - 8][0] === enemyPiece) {
                        validIndexes.push(rookIndex - 8);
                        break;
                    }
                    validIndexes.push(rookIndex - 8);
                    rookIndex -= 8;
                }
                rookIndex = index;
                // Going left
                while (rookIndex % 8 !== 0 && rookIndex < 64) {
                    if (board[rookIndex - 1][0] === myPiece) {
                        break;
                    } else if (board[rookIndex - 1][0] === enemyPiece) {
                        validIndexes.push(rookIndex - 1);
                        break;
                    }
                    validIndexes.push(rookIndex - 1);
                    rookIndex -= 1;
                }
                rookIndex = index;
                // Going right
                while (rookIndex % 8 !== 7 && rookIndex >= 0) {
                    if (board[rookIndex + 1][0] === myPiece) {
                        break;
                    } else if (board[rookIndex + 1][0] === enemyPiece) {
                        validIndexes.push(rookIndex + 1);
                        break;
                    }
                    validIndexes.push(rookIndex + 1);
                    rookIndex += 1;
                }
                break;
            case "B":
                // Down + Right
                let bishopIndex = index;
                while (bishopIndex % 8 !== 7 && bishopIndex < 56) {
                    if (board[bishopIndex + 9][0] === myPiece) {
                        break;
                    } else if (board[bishopIndex + 9][0] === enemyPiece) {
                        validIndexes.push(bishopIndex + 9);
                        break;
                    }
                    validIndexes.push(bishopIndex + 9);
                    bishopIndex += 9;
                }
                // Down + Left
                bishopIndex = index;
                while (bishopIndex % 8 !== 0 && bishopIndex < 56) {
                    if (board[bishopIndex + 7][0] === myPiece) {
                        break;
                    } else if (board[bishopIndex + 7][0] === enemyPiece) {
                        validIndexes.push(bishopIndex + 7);
                        break;
                    }
                    validIndexes.push(bishopIndex + 7);
                    bishopIndex += 7;
                }
                // Up + Right
                bishopIndex = index;
                while (bishopIndex % 8 !== 7 && bishopIndex > 7) {
                    if (board[bishopIndex - 7][0] === myPiece) {
                        break;
                    } else if (board[bishopIndex - 7][0] === enemyPiece) {
                        validIndexes.push(bishopIndex - 7);
                        break;
                    }
                    validIndexes.push(bishopIndex - 7);
                    bishopIndex -= 7;
                }
                // Up + Left
                bishopIndex = index;
                while (bishopIndex % 8 !== 0 && bishopIndex > 7) {
                    if (board[bishopIndex - 9][0] === myPiece) {
                        break;
                    } else if (board[bishopIndex - 9][0] === enemyPiece) {
                        validIndexes.push(bishopIndex - 9);
                        break;
                    }
                    validIndexes.push(bishopIndex - 9);
                    bishopIndex -= 9;
                }
                break;
            case "N":
                let knightIndex = index;
                let dd = knightIndex < 48;
                let uu = knightIndex > 15;
                let ll = (knightIndex % 8 !== 0 && knightIndex % 8 !== 1)
                let rr = (knightIndex % 8 !== 6 && knightIndex % 8 !== 7)
                let d = knightIndex < 56;
                let u = knightIndex > 7;
                let l = knightIndex % 8 !== 0;
                let r = knightIndex % 8 !== 7;
                // DDR
                if (dd && r) {
                    if (board[index + 17][0] !== myPiece) {
                        validIndexes.push(index + 17);
                    }
                }
                // DDL
                if (dd && l) {
                    if (board[index + 15][0] !== myPiece) {
                        validIndexes.push(index + 15);
                    }
                }
                // DLL
                if (d & ll) {
                    if (board[index + 6][0] !== myPiece) {
                        validIndexes.push(index + 6);
                    }
                }
                // DRR
                if (d && rr) {
                    if (board[index + 10][0] !== myPiece) {
                        validIndexes.push(index + 10);
                    }
                }
                // UUR
                if (uu && r) {
                    if (board[index - 15][0] !== myPiece) {
                        validIndexes.push(index - 15);
                    }
                }
                // UUL
                if (uu && l) {
                    if (board[index - 17][0] !== myPiece) {
                        validIndexes.push(index - 17);
                    }
                }
                // ULL
                if (u && ll) {
                    if (board[index - 10][0] !== myPiece) {
                        validIndexes.push(index - 10);
                    }
                }
                // URR
                if (u && rr) {
                    if (board[index - 6][0] !== myPiece) {
                        validIndexes.push(index - 6);
                    }
                }
                break;
            case "Q":
                let queenIndex = index;
                // Going down
                while (queenIndex < 56) {
                    if (board[queenIndex + 8][0] === myPiece) {
                        break;
                    } else if (board[queenIndex + 8][0] === enemyPiece) {
                        validIndexes.push(queenIndex + 8);
                        break;
                    }
                    validIndexes.push(queenIndex + 8);
                    queenIndex += 8;
                }
                queenIndex = index;
                // Going up
                while (queenIndex > 7) {
                    if (board[queenIndex - 8][0] === myPiece) {
                        break;
                    } else if (board[queenIndex - 8][0] === enemyPiece) {
                        validIndexes.push(queenIndex - 8);
                        break;
                    }
                    validIndexes.push(queenIndex - 8);
                    queenIndex -= 8;
                }
                queenIndex = index;
                // Going left
                while (queenIndex % 8 !== 0 && queenIndex < 64) {
                    if (board[queenIndex - 1][0] === myPiece) {
                        break;
                    } else if (board[queenIndex - 1][0] === enemyPiece) {
                        validIndexes.push(queenIndex - 1);
                        break;
                    }
                    validIndexes.push(queenIndex - 1);
                    queenIndex -= 1;
                }
                queenIndex = index;
                // Going right
                while (queenIndex % 8 !== 7 && queenIndex >= 0) {
                    if (board[queenIndex + 1][0] === myPiece) {
                        break;
                    } else if (board[queenIndex + 1][0] === enemyPiece) {
                        validIndexes.push(queenIndex + 1);
                        break;
                    }
                    validIndexes.push(queenIndex + 1);
                    queenIndex += 1;
                }
                // Down + Right
                queenIndex = index;
                while (queenIndex % 8 !== 7 && queenIndex < 56) {
                    if (board[queenIndex + 9][0] === myPiece) {
                        break;
                    } else if (board[queenIndex + 9][0] === enemyPiece) {
                        validIndexes.push(queenIndex + 9);
                        break;
                    }
                    validIndexes.push(queenIndex + 9);
                    queenIndex += 9;
                }
                // Down + Left
                queenIndex = index;
                while (queenIndex % 8 !== 0 && queenIndex < 56) {
                    if (board[queenIndex + 7][0] === myPiece) {
                        break;
                    } else if (board[queenIndex + 7][0] === enemyPiece) {
                        validIndexes.push(queenIndex + 7);
                        break;
                    }
                    validIndexes.push(queenIndex + 7);
                    queenIndex += 7;
                }
                // Up + Right
                queenIndex = index;
                while (queenIndex % 8 !== 7 && queenIndex > 7) {
                    if (board[queenIndex - 7][0] === myPiece) {
                        break;
                    } else if (board[queenIndex - 7][0] === enemyPiece) {
                        validIndexes.push(queenIndex - 7);
                        break;
                    }
                    validIndexes.push(queenIndex - 7);
                    queenIndex -= 7;
                }
                // Up + Left
                queenIndex = index;
                while (queenIndex % 8 !== 0 && queenIndex > 7) {
                    if (board[queenIndex - 9][0] === myPiece) {
                        break;
                    } else if (board[queenIndex - 9][0] === enemyPiece) {
                        validIndexes.push(queenIndex - 9);
                        break;
                    }
                    validIndexes.push(queenIndex - 9);
                    queenIndex -= 9;
                }
                break;
            case "K":
                // UU
                if (index > 7) {
                    if (board[index - 8][0] !== myPiece) {
                        validIndexes.push(index - 8);
                    }
                }
                // UR
                if (index > 7 && index % 8 !== 7) {
                    if (board[index - 7][0] !== myPiece) {
                        validIndexes.push(index - 7);
                    }
                }
                // RR
                if (index % 8 !== 7) {
                    if (board[index + 1][0] !== myPiece) {
                        validIndexes.push(index + 1);
                    }
                }
                // DR
                if (index < 56 && index % 8 !== 7) {
                    if (board[index + 9][0] !== myPiece) {
                        validIndexes.push(index + 9);
                    }
                }
                // DD
                if (index < 56) {
                    if (board[index + 8][0] !== myPiece) {
                        validIndexes.push(index + 8);
                    }
                }
                // DL
                if (index < 56 && index % 8 !== 0) {
                    if (board[index + 7][0] !== myPiece) {
                        validIndexes.push(index + 7);
                    }
                }
                // LL
                if (index % 8 !== 0) {
                    if (board[index - 1][0] !== myPiece) {
                        validIndexes.push(index - 1);
                    }
                }
                // UL
                if (index > 7 && index % 8 !== 0) {
                    if (board[index - 9][0] !== myPiece) {
                        validIndexes.push(index - 9);
                    }
                }
                break;
            default:
                alert("RED ALERT");
        }
        return validIndexes;
    }

    const pickMovement = (end) => {
        move(index, end);
        setTurn(turn === "W" ? "B" : "W");
    }

    const toggleBackground = (indexes) => {
        indexes.forEach((value) => {
            let spot = document.getElementById(`boardSpot${value}`);
            spot.style.backgroundColor = "yellow";
            spot.onclick = () => {
                pickMovement(value);
                resetBackground(indexes);
            }
        })
    }

    const resetBackground = (indexes) => {
        indexes.forEach((value) => {
            let spot = document.getElementById(`boardSpot${value}`);
            spot.style.backgroundColor = ((value + Math.floor(value / 8)) % 2 === 0) ? "white" : "grey";
            spot.onclick = clickPiece;
        })
    }

    const clickPiece = () => {
        resetBackground(prevIndex);
        if (turn === piece[0]) {
            let valid = possibleMoves(piece, index);
            if (valid.length === 0) {
                alert("Cannot move that piece");
                return;
            }
            setPrevIndex(valid);
            toggleBackground(valid);
            // let userMove = prompt("Valid Moves: " + valid.map(indexToValue));
            // console.log(userMove);
            // userMove = valueToIndex(userMove);
            // console.log(userMove);
            // if (valid.includes(userMove)) {
            //     move(index, userMove);
            // } else {
            //     alert("Invalid Choice");
            //     return;
            // }
            // setTurn(turn === "W" ? "B" : "W");
            // resetBackground(valid);
        } else {
            if (piece[0] === " ") {
                alert("Cannot Move Nothing");
            } else {
                // alert("Not your turn!");
            }
        }
    }

    return (
        <div
            id={`boardSpot${index}`}
            style={{
                width: "12.5%",
                textAlign: "center",
                margin: "0px",
                backgroundColor: currentBackground
            }} >
            <img width="100%" height="100%" src={pieceTranslator(piece)} onClick={clickPiece} />
        </div >
    )
}