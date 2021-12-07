<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import AddPollForm from "./components/AddPollForm.svelte";
	import Tabs from "./shared/Tabs.svelte";


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
		<p>This is Current Polls Section</p>
		{:else if activeItem === "Add New Polls"}
		<AddPollForm />
	{/if}
</main>
<Footer/>

<style>
	main{
		max-width: 960px;
		margin: 0 auto;
	}
</style>