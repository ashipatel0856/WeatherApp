 const userTab= document.querySelector("[data-userWeather]");
 const searchTab = document.querySelector("[data-searchWeather]");
 const userContainer = document.querySelector(".weather-container");

 const grantAccessContainer = document.querySelector("[.grant-location-container]");
 const searchForm = document.querySelector("[data-searchForm]");
 const loadingScreen = document.querySelector(".loading-container");

 const userInfoContainer = document.querySelector(".user-info-container");


 // initially variable need

 let currentTab = userTab;
 const API_KEY = "FHEWORHFNVWPJWEJFW";
 currentTab.classList.add("current-tab");