<script>
    import Button from "../shared/Button.svelte"
    let data = {question: "", answerA: "", answerB: ""};
    const handleSubmit = () => {
        console.log(data)
    }
</script>
<form on:submit|preventDefault="{handleSubmit}">
    <div class="form-feild">
        <label for="question">Question :</label>
        <input type="text" id="question" bind:value="{data.question}">
        <label for="answer-a">Answer A :</label>
        <input type="text" id="answer-a" bind:value="{data.answerA}">
        <label for="answer-b">Answer B :</label>
        <input type="text" id="answer-b" bind:value="{data.answerB}">
        <Button type="secondary">Add Poll</Button>
    </div>
</form>
<style>
    form{
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    label{
        text-align: left;
        margin: 10px 0;
    }
    input{
        border-radius: 6px;
        width: 100%;
    }
    button{
        padding: 10px 25px;
    }
</style>