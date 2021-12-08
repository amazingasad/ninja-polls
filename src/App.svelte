<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import PollList from "./components/PollList.svelte";
	import AddPollForm from "./components/AddPollForm.svelte";
	import Tabs from "./shared/Tabs.svelte";
	let polls = [
		{question: "Python or JS ?", answerA: "Python", answerB: "JavaScript", VoteA:15, VoteB:7, id: 1},
	]


	const handleAdd = (e) =>{
		const poll = e.detail;
		polls = [poll, ...polls];
		console.log(polls);
		activeItem = "Current Polls";
	}
	let items = ["Current Polls", "Add New Polls"];
	let activeItem = "Current Polls";
	const tabChange = (p)=>{
		activeItem = p.detail;
	}
</script>
<Header />
<main>
	<Tabs items={items} activeItem={activeItem} on:changeTab={tabChange} />
	{#if activeItem === "Current Polls"}
		<PollList polls={polls} />
		{:else if activeItem === "Add New Polls"}
		<AddPollForm on:add={handleAdd} />
	{/if}
</main>
<Footer/>

<style>
	main{
		max-width: 960px;
		margin: 0 auto;
	}
</style>