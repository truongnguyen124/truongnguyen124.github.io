$(document).ready(function(){

    let itemTemplate

    let Col1 = document.getElementById('col-1');
    let Col2 = document.getElementById('col-2');
    let Col3 = document.getElementById('col-3');
    let Col4 = document.getElementById('col-4');


    let taskReady = JSON.parse(window.localStorage.getItem('taskReady') || '[]')


    let inProgress = JSON.parse(window.localStorage.getItem('inProgress') || '[]')
    let needsReview = JSON.parse(window.localStorage.getItem('needsReview') || '[]')
    let done = JSON.parse(window.localStorage.getItem('done') || '[]')
    


    taskReady.forEach((item, index) => {
        $('#col-1').append(`
        <div class='task' draggable='true' data-id="${item.id}">
        <div class='task__tags'><span class='task__tag task__tag--illustration'>${item.label}</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
        <p>${item.description}</p>
        <div class='task__stats'>
          <span>${item.deadline}</span>
          <span class='task__owner'></span>
        </div>
      </div>
        `)
    })
    inProgress.forEach((item, index) => {
        $('#col-2').append(`
        <div class='task' draggable='true' data-id="${item.id}">
        <div class='task__tags'><span class='task__tag task__tag--illustration'>${item.label}</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
        <p>${item.description}</p>
        <div class='task__stats'>
          <span>${item.deadline}</span>
          <span class='task__owner'></span>
        </div>
      </div>
        `)
    })
    needsReview.forEach((item, index) => {
        $('#col-3').append(`
        <div class='task' draggable='true' data-id="${item.id}">
        <div class='task__tags'><span class='task__tag task__tag--illustration'>${item.label}</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
        <p>${item.description}</p>
        <div class='task__stats'>
          <span>${item.deadline}</span>
          <span class='task__owner'></span>
        </div>
      </div>
        `)
    })
    done.forEach((item, index) => {
        $('#col-4').append(`
        <div class='task' draggable='true' data-id="${item.id}">
        <div class='task__tags'><span class='task__tag task__tag--illustration'>${item.label}</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
        <p>${item.description}</p>
        <div class='task__stats'>
          <span>${item.deadline}</span>
          <span class='task__owner'></span>
        </div>
      </div>
        `)
    })





    $( "#add-button" ).click(function() {

        let label = $('#input-label').val()

        let description = $('#input-description').val()

        let newTanksReady = JSON.parse(window.localStorage.getItem('taskReady') || '[]')

        newTanksReady.push({
            id: new Date().getTime(),
            label,
            description,
            deadline: '23/06/2021'
        })
        localStorage.setItem("taskReady", JSON.stringify(newTanksReady));

        // dong popup
        // update lai dom
    });



    


    function onEndCheck(evt) {
        evt.to;    // target list
        evt.from;  // previous list
        evt.oldDraggableIndex;
        // xac dinh keo tu dau, va den dau 
        let idFrom =  evt.from.id
        let idTo = evt.to.id
        let index = evt.oldDraggableIndex
        switch (idFrom) {
            case 'col-1':
                var newArrTaskReady = JSON.parse(window.localStorage.getItem('taskReady') || '[]')
                itemTemplate = [...newArrTaskReady][index]

                // cat phan tu da duoc keo di mat
                var leftArr = newArrTaskReady.slice(0,index)
                var rightArr = newArrTaskReady.slice(index + 1, newArrTaskReady.length)
                var newArr = leftArr.concat(rightArr);
                localStorage.setItem("taskReady", JSON.stringify(newArr));
                break;
            case 'col-2':
                var newArrinProgress = JSON.parse(window.localStorage.getItem('inProgress') || '[]')
                itemTemplate = [...inProgress][index]

                // cat phan tu da duoc keo di mat
                var leftArr = newArrinProgress.slice(0,index)
                var rightArr = newArrinProgress.slice(index + 1, newArrinProgress.length)
                var newArr = leftArr.concat(rightArr);
                localStorage.setItem("inProgress", JSON.stringify(newArr));
                break;
            case 'col-3':
                var newArrneedsReview = JSON.parse(window.localStorage.getItem('needsReview') || '[]')
                itemTemplate = [...needsReview][index]

                // cat phan tu da duoc keo di mat
                var leftArr = newArrneedsReview.slice(0,index)
                var rightArr = newArrneedsReview.slice(index + 1, newArrneedsReview.length)
                var newArr = leftArr.concat(rightArr);
                localStorage.setItem("needsReview", JSON.stringify(newArr));
                break;
            case 'col-4':
                var newArrdone = JSON.parse(window.localStorage.getItem('done') || '[]')
                itemTemplate = [...newArrdone][index]

                // cat phan tu da duoc keo di mat
                var leftArr = newArrdone.slice(0,index)
                var rightArr = newArrdone.slice(index + 1, newArrdone.length)
                var newArr = leftArr.concat(rightArr);
                localStorage.setItem("done", JSON.stringify(newArr));
                break;
            default:
                break;
        }
        
        // them vao o day
        switch (idTo) {
            case 'col-1':
                var newTaskReady = JSON.parse(window.localStorage.getItem('taskReady') || '[]')
                newTaskReady.push(itemTemplate)
                localStorage.setItem("taskReady", JSON.stringify(newTaskReady));
                break;
            case 'col-2':
                var newinProgress = JSON.parse(window.localStorage.getItem('inProgress') || '[]')
                newinProgress.push(itemTemplate)
                localStorage.setItem("inProgress", JSON.stringify(newinProgress));
                break;
            case 'col-3':
                var newneedsReview = JSON.parse(window.localStorage.getItem('needsReview') || '[]')
                newneedsReview.push(itemTemplate)
                localStorage.setItem("needsReview", JSON.stringify(newneedsReview));
                break;
            case 'col-4':
                var newDone = JSON.parse(window.localStorage.getItem('done') || '[]')
                newDone.push(itemTemplate)
                localStorage.setItem("done", JSON.stringify(newDone));
                break;
            default:
                break;
        }
    }





    Sortable.create(Col1, {
        group: "share",
        onEnd: function (evt) {
            onEndCheck(evt)
        }
    });

    
    Sortable.create(Col2, {
        group: "share",
        onEnd: function (evt) {
            onEndCheck(evt)
        }
    });

    
    Sortable.create(Col3, {
        group: "share",
        onEnd: function (evt) {
            onEndCheck(evt)
        }
    });

    
    Sortable.create(Col4, {
        group: "share",
        onEnd: function (evt) {
            onEndCheck(evt)
        }
    });


});