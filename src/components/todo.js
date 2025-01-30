import React from "react";

function Todo() {
  var bool = true;
  function send() {
    var div = document.createElement("div");
    div.id = "element";
    div.style.padding = "3px";

    var input1 = document.getElementById("inputid").value;
    var span = document.createElement("span");
    span.id = "span";
    span.innerText = input1;

    var inputTag = document.createElement("input");

    inputTag.style.width = "100px";
    inputTag.style.visibility = "hidden";

    var editbtn = document.createElement("button");
    editbtn.innerText = "edit";
    editbtn.className = "btn btn-primary btn-sm";
    editbtn.addEventListener("click", go);
    // editbtn.addEventListener('click',edit)

    var del = document.createElement("button");
    del.innerText = "delete";
    del.className = "btn btn-danger btn-sm";
    del.addEventListener("click", dele);

    div.append(span, inputTag, editbtn, del);
    document.getElementById("list").append(div);
    document.getElementById("inputid").value = "";

    function go(click) {
      if (bool === true) {
        click.srcElement.innerText = "update";
        // click.srcElement.className = ""
        var element = click.currentTarget.parentNode.childNodes[0].innerText;
        click.currentTarget.parentNode.childNodes[1].value = element;
        click.currentTarget.parentNode.childNodes[1].style.visibility = "visible";
        bool = false;
      } else {
        var input = click.currentTarget.parentNode.childNodes[1].value;
        click.currentTarget.parentNode.childNodes[0].innerText = input;
        click.currentTarget.parentNode.childNodes[1].style.visibility = "hidden";
        click.srcElement.innerText = "edit";
        // click.srcElement.className = "btn btn-primary"
        bool = true;
      }

      //   console.log(bool);
    }
    function dele(click) {
      click.currentTarget.parentNode.innerText = "";
    }
  }

  const mtStyle = {
    display: "inline-block",
    padding: "10px",
    border: "2px solid black",
    textAlign: "center",
  };

  return (
    <>
      <div style={mtStyle}>
        <h2>Making a Todo list</h2>
        <input id="inputid" />
        <button className="btn btn-success" onClick={send}>
          add
        </button>
        <ul id="list"></ul>
      </div>
      <div>
        <p>Description</p>
        <p><button className="btn btn-sm btn-success">add</button> &nbsp;&emsp; = to add a new item to list</p>
        <p><button className="btn btn-sm btn-primary">edit</button> &emsp; = toedit list value</p>
        <p><button className="btn btn-sm btn-primary">update</button> = to updatelist value</p>
        <p><button className="btn btn-sm btn-danger">delete</button>&nbsp; = todelete the item</p>
      </div>
    </>
  );
}
export default Todo;
