import axios from "axios";
import { config } from "../config/config";

async function fetchwyrdata() {
    const options = {
        method: 'GET',
        url: 'https://would-you-rather.p.rapidapi.com/wyr/random',
        headers: {
            'X-RapidAPI-Key': config.xrapidapikey,
            'X-RapidAPI-Host': config.xrapidhost
        }
    };

    // Predefined pool of "Would You Rather" questions
    const wouldYouRatherQuestions = [
      { question: "Would you rather have the ability to fly or be invisible?" },
      { question: "Would you rather always have to sing instead of speak or dance everywhere you go?" },
      { question: "Would you rather live without the internet or live without air conditioning and heating?" },
      { question: "Would you rather be a famous actor or a famous singer?" },
      { question: "Would you rather have a rewind button or a pause button on your life?" },
      { question: "Would you rather fight a hundred duck-sized horses or one horse-sized duck?" },
      { question: "Would you rather be able to teleport anywhere or be able to read minds?" },
      { question: "Would you rather live in a world without music or in a world without movies?" },
      { question: "Would you rather have the power of teleportation or the power of telekinesis?" },
      { question: "Would you rather be the funniest person in the room or the most intelligent?" },
      { question: "Would you rather have more time or more money?" },
      { question: "Would you rather be able to talk to animals or speak all human languages?" },
      { question: "Would you rather never have to do laundry again or never have to wash dishes again?" },
      { question: "Would you rather live in a treehouse or in a cave?" },
      { question: "Would you rather be able to control the weather or talk to animals?" },
      { question: "Would you rather live without TV or live without music?" },
      { question: "Would you rather have super strength or super speed?" },
      { question: "Would you rather be a master at every musical instrument or be fluent in every language?" },
      { question: "Would you rather always have a full phone battery or a full gas tank?" },
      { question: "Would you rather live 100 years in the past or 100 years in the future?" },
      { question: "Would you rather be able to visit outer space or the deep sea?" },
      { question: "Would you rather have the ability to see 10 minutes into the future or 150 years into the future?" },
      { question: "Would you rather have unlimited international first-class tickets or never have to pay for food at restaurants?" },
      { question: "Would you rather be able to control fire or water?" },
      { question: "Would you rather live in a haunted house or in a house with no internet?" },
      { question: "Would you rather be famous on the internet or in real life?" },
      { question: "Would you rather be the best player on a losing team or the worst player on a winning team?" },
      { question: "Would you rather have a personal chef or a personal chauffeur?" },
      { question: "Would you rather have a permanent bad haircut or a permanent bad dye job?" },
      { question: "Would you rather live on the beach or in a cabin in the woods?" },
      { question: "Would you rather be able to control time or be able to control people's emotions?" },
      { question: "Would you rather always be 10 minutes late or always be 20 minutes early?" },
      { question: "Would you rather have an extra hour every day or an extra day every month?" },
      { question: "Would you rather have a photographic memory or be able to forget anything you want?" },
      { question: "Would you rather spend a year entirely alone or a year without privacy?" },
      { question: "Would you rather be able to play every musical instrument or master every sport?" },
      { question: "Would you rather always have a great internet connection or never run out of phone battery?" },
      { question: "Would you rather have the ability to find anything lost or be able to remember everything?" },
      { question: "Would you rather be able to eat anything without gaining weight or never need to sleep?" },
      { question: "Would you rather have a job you love that pays very little or a job you hate that pays a lot?" },
      { question: "Would you rather be able to teleport anywhere instantly or have a time machine?" },
      { question: "Would you rather live in a place where it's always hot or always cold?" },
      { question: "Would you rather have a completely automated home or a self-driving car?" },
      { question: "Would you rather be a kid your whole life or an adult your whole life?" },
      { question: "Would you rather have an unlimited gift card to a restaurant or a clothing store?" },
      { question: "Would you rather always have a perfect memory or be able to forget anything you want?" },
      { question: "Would you rather be able to change your appearance or your voice at will?" },
      { question: "Would you rather be famous for a good reason or infamous for a bad reason?" },
      { question: "Would you rather live without your phone for a year or without your computer for a year?" },
      { question: "Would you rather never be stuck in traffic again or never get another cold?" }
  ];
  

    // Array to store the question
    let questionArray = [];

    try {
        const response = await axios.request(options);

        // Check if response.data is valid
        if (!response.data || Object.keys(response.data).length === 0) {
            // Select a random question from the pool
            const randomQuestion = wouldYouRatherQuestions[Math.floor(Math.random() * wouldYouRatherQuestions.length)];
            questionArray.push(randomQuestion);
            return questionArray;
        } else {
            return response.data;
        }
    } catch (error) {
        //console.error(error);

        // Select a random question from the pool in case of error
        const randomQuestion = wouldYouRatherQuestions[Math.floor(Math.random() * wouldYouRatherQuestions.length)];
        questionArray.push(randomQuestion);

        //console.log(questionArray);
        return questionArray;
    }
}

export default fetchwyrdata;
