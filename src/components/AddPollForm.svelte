<script>
    import Button from "../shared/Button.svelte";
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    let data = {question: "", answerA: "", answerB: ""};
    let errors = {question: "", answerA: "", answerB: ""};
    let valid = false;
    const handleSubmit = () => {
        // question validation
        valid = true;
        if (data.question.trim().length < 5) {
            errors.question = "Question must have at least 5 characters";
            valid = false;
        }else{
            errors.question = "";
        }
        if (data.answerA.trim().length <1 ) {
            errors.answerA = "Answer A can not be empty";
            valid = false;
        }else{
            errors.answerA = "";
        }
        if (data.answerB.trim().length < 1) {
            errors.answerB = "Answer B can not be empty";
            valid = false;
        }else{
            errors.answerB = "";
        }
        if (valid) {
            let poll = {...data, VoteA: 0, VoteB: 0, id: Math.random()}
            dispatch("add", poll);
        }
    }
</script>
<form on:submit|preventDefault="{handleSubmit}">
    <div class="form-feild">
        <label for="question">Question :</label>
        <input type="text" id="question" bind:value="{data.question}">
        <p>{errors.question}</p>
        <label for="answer-a">Answer A :</label>
        <input type="text" id="answer-a" bind:value="{data.answerA}">
        <p>{errors.answerA}</p>
        <label for="answer-b">Answer B :</label>
        <input type="text" id="answer-b" bind:value="{data.answerB}">
        <p>{errors.answerB}</p>
        <Button type="secondary">Add Poll</Button>
    </div>
</form>
<style>
    form{
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    .form-feild p{
        color: crimson;
        font-size: 12px;
        font-weight: bold;
        margin-top: -5px;
    }
    label{
        text-align: left;
        margin: 10px 0;
    }
    input{
        border-radius: 6px;
        width: 100%;
    }
</style>