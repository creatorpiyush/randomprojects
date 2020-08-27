function loadProducts() {
  $.get("/", (product) => {
    for (let i = 0; i < 10; i++) {
      $("#posts-container").append(
        $(`<div class="card-image">
                <img src="../images/51310067.jpeg">
                <span class="card-title">Card Title</span>
                <a href="../images/51310067.jpeg" class="btn-floating halfway-fab waves-effect waves-light blue" style="font-size: 35px;" download="File_name"> 
                <i class="material-icons">get_app</i></a>
            </div>
`)
      );
      // clinked();
    }
  });
}

function clinked() {
  document.getElementById("liked").innerHTML = "favorite";
  console.log("btn clinked");
}

// window.onload = function () {
//   document.getElementById("likebtn").onclick = function () {
//     getElementById("like").innerHTML = "favorite";
//   };
// };

// ondblclick="

// let count = 0;

// document.getElementById("like").onclick = () => {
//   count++;
// };

// console.log(count);

// todo: llke button functioning
// <button class="btn-floating halfway-fab waves-effect waves-light" id='likebtn' ondblclick="clinked()"> <i class="material-icons"
//         id="liked" style="font-size: 35px;" >favorite_border</i></button>
