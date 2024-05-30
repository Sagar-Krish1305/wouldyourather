import React, { useEffect  ,useState } from "react";
import fetchwyrdata from "./fetchdata/fetchwyr";
function App() {
  const [part1, setPart1] = useState("");
  const [part2, setPart2] = useState("");
  
  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await fetchwyrdata();
        if (response) {
          console.log(response[0].question);
          // Extract the question
          const question = response[0].question;

          // Define the delimiter
          const delimiter = " or ";

          // Split the question into two parts


          if (question.includes(delimiter)) {
            const parts = question.split(delimiter);
            const trimmedPart1 = parts[0].replace("Would you rather ", "").trim();
            const trimmedPart2 = parts[1].trim();
            setPart1(trimmedPart1);
            setPart2(trimmedPart2);
            
          }
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    fetchdata();
  }, []);

  return (
    <div>
      <h1>Would You Rather</h1>

        <div>
          <p>Option 1: {part1}</p>
          <p>Option 2: {part2}</p>
        </div>
  
    </div>
  );
}

export default App;
