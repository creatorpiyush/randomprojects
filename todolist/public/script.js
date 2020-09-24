function loadtasks() {
  $.get("/tasks", (tasks) => {
    for (let t of tasks) {
      $("#tasks").append(
        t.important == "Important"
          ? $(`
          <b><b><div>${t.task}</div></b></b>`)
          : $(`<div>${t.task}</div>`)
      );
    }
  });
}
