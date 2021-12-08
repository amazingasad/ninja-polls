<script>
    import Card from "../shared/Card.svelte"
    export let poll;
    $:totalVote = poll.VoteA + poll.VoteB
</script>
<Card>
    <div class="poll">
        <h3> {poll.question} </h3>
        <p>Total Votes : {totalVote}</p>
        <div class="answer">
            <div class="percent percent-a"></div>
            <span>{poll.answerA} ({poll.VoteA})</span>
        </div>
        <div class="answer">
            <div class="percent percent-b"></div>
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
    span{
        display: inline-block;
        padding: 10px 20px;    }
</style>