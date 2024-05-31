import React , {useEffect , useState} from 'react';
import fetchwyrdata from "../../../fetchdata/fetchwyr";
import Progress from "../../../CircularProgress"
export const MainPage = (
) => {

    const isMobile = window.innerWidth <= 768;

    const backgroundStyle = {
        backgroundColor: '',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        position: 'relative',
    };

    const leftContainerStyle = {
        backgroundColor: '#598ef0',
        width: '50%',
        minHeight: '100vh',
        zIndex: '1',
        position: 'absolute',
        left: '0%',
        userSelect: 'none', // Make text non-selectable
    }

    const rightContainerStyle = {
        backgroundColor: '#f15361',
        width: '50%',
        minHeight: '100vh',
        zIndex: '1',
        position: 'absolute',
        right: '0%',
        userSelect: 'none', // Make text non-selectable
    }

    const titleStyle = {
        fontSize: isMobile ? '3em' : '5em',
        padding: '30px',
        color: 'black'
    }

    const titleContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        textAlign: 'center',
        position: 'absolute',
        top: isMobile ? '20%' : '15%',
        transform: 'translateY(-50%)',
        zIndex: 4,
        userSelect: 'none', // Make text non-selectable
    }

    const questionContainerStyle = {
        
        fontSize: isMobile ? '1em' : '2em',
        textAlign: 'center',
        color: 'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        userSelect: 'none', // Make text non-selectable
    }


    const [part1, setPart1] = useState("");
    const [part2, setPart2] = useState("");
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
    useEffect(() => {

      fetchdata();
    }, []);
    const handleLeftSideClick = () => {
        const newProgress = generateRandomProgress();
      setProgress(newProgress);
      console.log("Progress updated to:", newProgress);
       fetchdata();
    }

    const handleRightSideClick = () => {
        const newProgress = generateRandomProgress();
      setProgress(newProgress);
      console.log("Progress updated to:", newProgress);
        fetchdata();
    }
    const generateRandomProgress = () => Math.floor(Math.random() * (75 - 25 + 1)) + 25;
  
    const [progress, setProgress] = useState(generateRandomProgress());
  
    
    return (
        <div style={backgroundStyle}>
            <div style={titleContainerStyle}>
                <div style={titleStyle}>
                    Would You Rather
                </div>
            </div>

            <div style={leftContainerStyle} onClick={handleLeftSideClick}>
                <div style={questionContainerStyle}>
                    {part1}
                </div>
                <Progress value={progress}/>
            </div>
            <div style={rightContainerStyle} onClick={handleRightSideClick}>
                <div style={questionContainerStyle}>
                    {part2}
                </div>
                <Progress value={100- progress} />
            </div>
        </div>
    );
}
