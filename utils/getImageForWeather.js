const images = {
  Clear: require("../assets/clear.jpeg"),
  Hail: require("../assets/hail.jpeg"),
  "Heavy Cloud": require("../assets/heavy-cloud.jpeg"),
  "Light Cloud": require("../assets/light-cloud.jpeg"),
  "Heavy Rain": require("../assets/heavy-rain2.jpeg"),
  "Light Rain": require("../assets/light-rain.jpeg"),
  Showers: require("../assets/showers.jpeg"),
  Sleet: require("../assets/sleet.jpeg"),
  Snow: require("../assets/snow.jpeg"),
  Thunder: require("../assets/thunder.jpeg")
};

export default weather => images[weather];
