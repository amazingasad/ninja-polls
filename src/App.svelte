<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import PollList from "./components/PollList.svelte";
	import AddPollForm from "./components/AddPollForm.svelte";
	import Tabs from "./shared/Tabs.svelte";
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
	};
	const handleVote = (e) => {
		const {id, option} = e.detail;
		let copiedPoll = [...polls];
		let upvotedPoll = copiedPoll.find((poll) => poll.id == id);
		if(option === "a"){
			upvotedPoll.VoteA++;
		}
		if(option === "b"){
			upvotedPoll.VoteB++;
		}
		polls = copiedPoll;
	};
</script>
<Header />
<main>
	<Tabs items={items} activeItem={activeItem} on:changeTab={tabChange} />
	{#if activeItem === "Current Polls"}
		<PollList on:vote={handleVote} />
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