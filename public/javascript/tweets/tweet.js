window.addEventListener("DOMContentLoaded", function () {
  bindTweet();
});

function bindTweet() {
  const elements = document.querySelectorAll(".btn-danger");
  const tweetContainer = document.querySelector("#tweet-list-container");
  for (let btn of elements) {
    btn.addEventListener("click", function ($event) {
      const tweetId = $event.target.getAttribute("tweetid");
      axios
        .delete("/tweets/" + tweetId)
        .then(function (response) {
          tweetContainer.innerHTML = response.data;
          bindTweet();
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  }
}
