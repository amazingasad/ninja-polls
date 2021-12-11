<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    import Card from "../shared/Card.svelte"
    export let poll;
    $:totalVote = poll.VoteA + poll.VoteB;
    $:percentA = Math.floor(100 / totalVote * poll.VoteA)
    $:percentB = Math.floor(100 / totalVote * poll.VoteB)
    const handleVote = (option, id) =>{
        dispatch("vote", {option, id});
    };
</script>
<Card>
    <div class="poll">
        <h3> {poll.question} </h3>
        <p>Total Votes : {totalVote}</p>
        <div class="answer" on:click={() => handleVote("a", poll.id)}>
            <div class="percent percent-a" style="width: {percentA}%;"></div>
            <span>{poll.answerA} ({poll.VoteA})</span>
        </div>
        <div class="answer" on:click={() => handleVote("b", poll.id)}>
            <div class="percent percent-b" style="width: {percentB}%;"></div>
            <span>{poll.answerB} ({poll.VoteB})</span>
        </div>
    </div>
</Card>
<style>
    h3{
        color: #555;
        margin: 0 auto;
    }
    p{
        margin-top: 6px;
        font-size: 14px;
        color: #aaa;
        margin-bottom: 30px;
    }
    .answer{
        background: #f0efef;
        cursor: pointer;
        margin: 10px auto;
        position: relative;
    }
    .answer:hover{
        opacity: 0.6;
    }
    .percent{
        height: 100%;
        position: absolute;
        box-sizing: border-box;
    }
    .percent-a{
        background-color: rgba(217, 27, 66, 0.4);
        border-left: 3px solid #d91b42;
    }
    .percent-b{
        border-left: 3px solid #45c496;
        background-color: rgba(69, 196, 150, 0.4);
    }
    span{
        display: inline-block;
        padding: 10px 20px;    }
</style>