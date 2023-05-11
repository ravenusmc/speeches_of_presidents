<template>
  <div>
    <section>
      <div class="pic-div"></div>
      <div class="paragragh-div">
        <h1 class="center heading">Speeches of Presidents</h1>
        <div class="paragraphs">
          <p>
            This project will focus on examing some of the speeches of U.S.
            Presidents from FDR to the modern day. The main aspect of the
            project will be looking at sentiment of each of the speeches as well
            as examining the most common words used in the speech.
          </p>
          <p>
            I've done many projects like this before and I have to say that I'm
            very interested in sentiment analysis and how it can be applied to
            look at historical speeches. I also like looking at word counts and
            I may do that for this project. This, to me, can tell one how values
            changed overtime.
          </p>
          <p>
            I hope you find this simple project interesting. A few final
            thoughts. The About Page talks about me, the data page is where you
            will actually see the data analysis. Yes, you need to sign up. I
            create the login system simply to get some work on MySQL.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
	
<script>
export default {
  name: "Intro",
};
</script>

<style scoped>
section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 600px;
  margin: 50px 0 50px 0;
}

.pic-div {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/images/jfk.jpg");
  background-position: center;
  background-repeat: no-repeat;
}

.paragragh-div {
  margin-right: 5%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.heading {
  text-transform: uppercase;
}

.paragraphs {
  width: 70%;
}
</style>