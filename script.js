const followBtn = document.getElementById("followBtn");
const messageBtn = document.getElementById("messageBtn");
const message = document.getElementById("message");

let isFollowing = false;

followBtn.addEventListener("click", function() {
    isFollowing = !isFollowing;

    if (isFollowing) {
        followBtn.textContent = "Following";
        message.textContent = "You are now following Zahra!";
    } else {
        followBtn.textContent = "Follow";
        message.textContent = "You unfollowed Zahra";
    }
});

messageBtn.addEventListener("click", function() {
    message.textContent = "Hello Thanks for visiting my profile!";
});