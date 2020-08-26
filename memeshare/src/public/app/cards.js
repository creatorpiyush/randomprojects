function loadProducts() {
  $.get("/", (product) => {
    for (let i = 0; i < 10; i++) {
      $("#posts-container").append(
        $(`<div class="card-image">
                <img src="images/sample-1.jpg">
                <span class="card-title">Card Title</span>
                <span>
                    <a class="btn-floating halfway-fab waves-effect waves-light" id='likebtn'> <i class="material-icons"
                            id="like" style="font-size: 35px;">favorite_border</i></a>
                </span>
            </div>
`)
      );
    }
  });
}

$("#likebtn").dblclick(function () {
  // $("#like").append(`favorite`);
  alert("bye");
});



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
