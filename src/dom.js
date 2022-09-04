function dragAndDrop() {
  const draggables = document.querySelectorAll('.draggable');
  const containerRows = document.querySelectorAll('.row');
  let currentDraggableId;
  let currentDraggableAlignment;
  let currentX;
  let currentY;

  draggables.forEach((draggable) => {
    draggable.dataset.alignment = 'r';

    draggable.addEventListener('dblclick', () => {
      currentDraggableId = draggable.id;
      let tempAlign = '';

      if (currentDraggableAlignment === 'r') {
        tempAlign = 'c';
      } else {
        tempAlign = 'r';
      }

      if (!possible(currentDraggableId, currentX, currentY, tempAlign)) {
        console.log(3);
        return;
      }

      if (currentDraggableAlignment === 'r') {
        draggable.dataset.alignment = 'c';
        currentDraggableAlignment = 'c';
      } else {
        draggable.dataset.alignment = 'r';
        currentDraggableAlignment = 'r';
      }
    });

    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
      currentDraggableId = draggable.id;
      currentDraggableAlignment = draggable.dataset.alignment;
    });

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
    });
  });

  containerRows.forEach((row, gridY) => {
    const containers = row.querySelectorAll('.container');

    containers.forEach((container, gridX) => {
      container.dataset.y = gridY;
      container.dataset.x = gridX;

      container.addEventListener('click', () => {
        currentX = container.dataset.x;
        currentY = container.dataset.y;
      });

      container.addEventListener('dragover', (e) => {
        e.preventDefault();
        currentX = container.dataset.x;
        currentY = container.dataset.y;

        if (
          container.firstChild ||
          !possible(currentDraggableId, currentX, currentY, currentDraggableAlignment)
        ) {
          return;
        }

        const draggable = document.querySelector('.dragging');
        container.appendChild(draggable);

        if (currentDraggableId === 'shipone') {
        } else if (currentDraggableId === 'shiptwo' || currentDraggableId === 'shipthree') {
        } else if (currentDraggableId === 'shipfour') {
        } else {
        }
      });
    });
  });

  function possible(shipId, x, y, align) {
    let shipLength = 0;

    if (shipId === 'shipone') {
      shipLength = 2;
    } else if (shipId === 'shiptwo' || shipId === 'shipthree') {
      shipLength = 3;
    } else if (shipId === 'shipfour') {
      shipLength = 4;
    } else {
      shipLength = 5;
    }

    if (align === 'r') {
      console.log(1);
      return shipLength + Number(x) < 11;
    } else {
      console.log(2);
      return Number(y) - shipLength > -2;
    }
  }
}

function domManip() {}

export { dragAndDrop };
