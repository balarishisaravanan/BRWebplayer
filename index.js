playlocalVID = () => {
  var player = document.getElementById("videoPlayer");
  var currentVID = document.getElementById("currentVID");
  var selectedVID = document.getElementById("localVID").files[0];
  currentVID.setAttribute("src", URL.createObjectURL(new Blob([selectedVID])));
  player.load();
  player.play();
  var SelectedFileName = document.getElementById("localVID").value;
};
