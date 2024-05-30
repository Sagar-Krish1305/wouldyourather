import React from 'react';

export const MainPage = () => {

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
        fontFamily: 'Open Sans',
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
        fontFamily: 'Open Sans',
        fontSize: isMobile ? '2em' : '3em',
        textAlign: 'center',
        color: 'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        userSelect: 'none', // Make text non-selectable
    }

    const handleLeftSideClick = () => {
        console.log('Left side clicked');
    }

    const handleRightSideClick = () => {
        console.log('Right side clicked');
    }

    return (
        <div style={backgroundStyle}>
            <div style={titleContainerStyle}>
                <div style={titleStyle}>
                    Would You Rather
                </div>
            </div>

            <div style={leftContainerStyle} onClick={handleLeftSideClick}>
                <div style={questionContainerStyle}>
                    Kill children in Syria
                </div>
            </div>
            <div style={rightContainerStyle} onClick={handleRightSideClick}>
                <div style={questionContainerStyle}>
                    Kill children in Yemen
                </div>
            </div>
        </div>
    );
}
