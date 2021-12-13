import { writable } from "svelte/store";
const PollStore = writable([
    {
        question: "Python or JS ?",
        answerA: "Python",
        answerB: "JavaScript",
        VoteA:15,
        VoteB:7,
        id: 1
    },
]);
export default PollStore;