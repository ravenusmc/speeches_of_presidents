<template>
	<div>
	<section>
		<div class='pic-div'>

		</div>
		<div>
			<h1>Speeches of Presidents</h1>
		</div>
	</section>
	</div>
</template>
	
<script>
export default {
	name: 'Intro',
}
</script>

<style scoped>

section {
	display: grid;
	grid-template-columns: 1fr 1fr;
	height: 600px;
}

.pic-div {
	display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/images/jfk.jpg");
  background-position: center;
  /* background-size: cover; */
  background-repeat: no-repeat;
}

</style>