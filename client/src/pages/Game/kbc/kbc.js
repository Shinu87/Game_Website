import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import { useAuth } from "../../../context/auth.js";
function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");
  const [auth, setAuth] = useAuth();
  const [maxScore, setMaxScore] = useState(
    localStorage.getItem("maxScore") || "$ 0"
  );

  const data = [
    {
      id: 1,
      question: "Which IIT is located in the city of Mumbai?",
      answers: [
        { text: "IIT Bombay", correct: true },
        { text: "IIT Delhi", correct: false },
        { text: "IIT Madras", correct: false },
        { text: "IIT Kanpur", correct: false },
      ],
    },
    {
      id: 2,
      question: "Which NIT is located in the state of Karnataka?",
      answers: [
        { text: "NIT Warangal", correct: false },
        { text: "NIT Surathkal", correct: true },
        { text: "NIT Trichy", correct: false },
        { text: "NIT Calicut", correct: false },
      ],
    },
    {
      id: 3,
      question:
        "Who is known as the father of the Indian Institutes of Technology (IITs)?",
      answers: [
        { text: "Jawaharlal Nehru", correct: false },
        { text: "M. Visvesvaraya", correct: false },
        { text: "J. R. D. Tata", correct: true },
        { text: "Vikram Sarabhai", correct: false },
      ],
    },
    {
      id: 4,
      question: "Which IIT is renowned for its computer science department?",
      answers: [
        { text: "IIT Bombay", correct: false },
        { text: "IIT Delhi", correct: true },
        { text: "IIT Kharagpur", correct: false },
        { text: "IIT Kanpur", correct: false },
      ],
    },
    {
      id: 5,
      question:
        "In which year was the first Indian Institute of Technology (IIT) established?",
      answers: [
        { text: "1950", correct: false },
        { text: "1958", correct: true },
        { text: "1965", correct: false },
        { text: "1972", correct: false },
      ],
    },
    {
      id: 6,
      question:
        "Which NIT is known as the National Institute of Technology, Rourkela?",
      answers: [
        { text: "NIT Warangal", correct: false },
        { text: "NIT Surathkal", correct: false },
        { text: "NIT Trichy", correct: false },
        { text: "NIT Rourkela", correct: true },
      ],
    },
    {
      id: 7,
      question:
        "Which IIT is famous for its research in artificial intelligence?",
      answers: [
        { text: "IIT Bombay", correct: false },
        { text: "IIT Delhi", correct: true },
        { text: "IIT Madras", correct: false },
        { text: "IIT Kanpur", correct: false },
      ],
    },
    {
      id: 8,
      question: "Which NIT is located in the state of Uttar Pradesh?",
      answers: [
        { text: "NIT Warangal", correct: false },
        { text: "NIT Surathkal", correct: false },
        { text: "NIT Trichy", correct: false },
        { text: "MNNIT Allahabad", correct: true },
      ],
    },
    {
      id: 9,
      question: "Which IIT is known for its famous 'Open Electives' program?",
      answers: [
        { text: "IIT Bombay", correct: true },
        { text: "IIT Delhi", correct: false },
        { text: "IIT Kharagpur", correct: false },
        { text: "IIT Kanpur", correct: false },
      ],
    },
    {
      id: 10,
      question:
        "In which state is the Indian Institute of Technology, Indore located?",
      answers: [
        { text: "Gujarat", correct: false },
        { text: "Madhya Pradesh", correct: true },
        { text: "Rajasthan", correct: false },
        { text: "Uttarakhand", correct: false },
      ],
    },
    {
      id: 11,
      question:
        "Which NIT is known for its scenic location amidst the Western Ghats?",
      answers: [
        { text: "NIT Warangal", correct: false },
        { text: "NIT Surathkal", correct: false },
        { text: "NIT Calicut", correct: true },
        { text: "NIT Trichy", correct: false },
      ],
    },
    {
      id: 12,
      question: "Who was the first director of an IIT?",
      answers: [
        { text: "H. K. Sen", correct: true },
        { text: "S. S. Bhatnagar", correct: false },
        { text: "B. C. Roy", correct: false },
        { text: "Satish Dhawan", correct: false },
      ],
    },
    {
      id: 13,
      question:
        "Which IIT is known for its picturesque campus located on the banks of the Yamuna River?",
      answers: [
        { text: "IIT Bombay", correct: false },
        { text: "IIT Delhi", correct: true },
        { text: "IIT Madras", correct: false },
        { text: "IIT Kanpur", correct: false },
      ],
    },
    {
      id: 14,
      question:
        "In which state is the National Institute of Technology, Hamirpur located?",
      answers: [
        { text: "Himachal Pradesh", correct: true },
        { text: "Uttarakhand", correct: false },
        { text: "Jammu and Kashmir", correct: false },
        { text: "Punjab", correct: false },
      ],
    },
    {
      id: 15,
      question:
        "Which IIT is known for its strong emphasis on entrepreneurship and innovation?",
      answers: [
        { text: "IIT Bombay", correct: true },
        { text: "IIT Delhi", correct: false },
        { text: "IIT Kharagpur", correct: false },
        { text: "IIT Madras", correct: false },
      ],
    },
    {
      id: 16,
      question: "Which NIT is located in the state of Tamil Nadu?",
      answers: [
        { text: "NIT Warangal", correct: false },
        { text: "NIT Surathkal", correct: false },
        { text: "NIT Trichy", correct: true },
        { text: "NIT Calicut", correct: false },
      ],
    },
    {
      id: 17,
      question:
        "Which IIT is known for its research in robotics and automation?",
      answers: [
        { text: "IIT Bombay", correct: false },
        { text: "IIT Delhi", correct: true },
        { text: "IIT Madras", correct: false },
        { text: "IIT Kanpur", correct: false },
      ],
    },
    {
      id: 18,
      question:
        "In which city is the Indian Institute of Technology, Gandhinagar located?",
      answers: [
        { text: "Gandhinagar", correct: true },
        { text: "Ahmedabad", correct: false },
        { text: "Vadodara", correct: false },
        { text: "Surat", correct: false },
      ],
    },
    {
      id: 19,
      question:
        "Which NIT is known as the National Institute of Technology, Silchar?",
      answers: [
        { text: "NIT Warangal", correct: false },
        { text: "NIT Surathkal", correct: false },
        { text: "NIT Trichy", correct: false },
        { text: "NIT Silchar", correct: true },
      ],
    },
    {
      id: 20,
      question:
        "Which IIT is known for its extensive research in renewable energy?",
      answers: [
        { text: "IIT Bombay", correct: false },
        { text: "IIT Delhi", correct: false },
        { text: "IIT Kharagpur", correct: true },
        { text: "IIT Madras", correct: false },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  useEffect(() => {
    if (earned !== "$ 0" && earned > auth?.kbcmoney) {
      setAuth((prevAuth) => ({
        ...prevAuth,
        kbcmoney: earned,
      }));
    }
  }, [earned, auth, setAuth]);

  useEffect(() => {
    const earnedAmount = parseFloat(
      earned.replace("$", "").replace(/\./g, "").replace(",", "")
    );
    const maxScoreAmount = parseFloat(
      maxScore.replace("$", "").replace(/\./g, "").replace(",", "")
    );

    if (earned !== "$ 0" && earnedAmount > maxScoreAmount) {
      setMaxScore(earned);
      localStorage.setItem("maxScore", earned);
    }
  }, [earned, maxScore]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <h1>{auth?.kbcmoney}</h1>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <h1>Maxscore : {localStorage.getItem("maxScore")}</h1>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  key={m.id}
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
