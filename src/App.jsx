import { Chessboard } from "./Chessboard"

export const App = () => {
    return (
        <>
            <h1 style={{
                textAlign: "center"
            }}>
                Chess
            </h1>
            <Chessboard />
            <p>
                Notes: Very basic prototype currently. Not at all good
            </p>
        </>
    );
}