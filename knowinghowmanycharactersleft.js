// Knowing how many characters remainning max 200 and know the left

var tweet = prompt(" Make your tweet know here ");

var tweetcount = tweet.length;

window.alert = ( tweet + "you have inputed : " + tweet.length + " you now have : " + (200 - tweet.length) + "this is the reminning charater");
