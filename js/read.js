AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createBorderEl: function (position,id) {
    console.log("Create Border Completed");
    entityEl = document.createElement("a-entity");
    entityEl.setAttribute('id',id);
    entityEl.setAttribute('visible',true);
    entityEl.setAttribute('geometry',{primitive:'ring',radiusInner:10,radiusOuter:12});
    entityEl.setAttribute('position',position);
    entityEl.setAttribute('material',{color:"#E65100",opacity:1});
    return entityEl;
  },

  createThumbnailEl: function (item) {
    console.log("Create Thumbnail Completed");
    entityEl = document.createElement("a-entity");
    entityEl.setAttribute('visible',true);
    entityEl.setAttribute('geometry',{primitive:'circle',radius:10});
    entityEl.setAttribute('material',{src:item.url});
    return entityEl;
  },

  createTitleEl: function (position,item) {
    console.log("Create Title Completed");
    entityEl = document.createElement("a-entity");
    entityEl.setAttribute('visible',true);
    entityEl.setAttribute('text',{font: "exo2bold", align: "center", width: 5, color: "#E65100", value: item.title});
    entityEl.setAttribute('position',{ x: position, y: -20, z: position});
    return entityEl;
  },
  
  createCards: function () {
    const thumbNailsRef = [
      {
        id: "captain-aero",
        title: "Captain Aero",
        url: "./assets/thumbnails/post1.jpg",
      },
      {
        id: "outer-space",
        title: "Outer Space",
        url: "./assets/thumbnails/post2.jpg",
      },

      {
        id: "spiderman",
        title: "SpiderMan",
        url: "./assets/thumbnails/post3.jpg",
      },
      {
        id: "superman",
        title: "SuperMan",
        url: "./assets/thumbnails/post4.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      console.log("Create position Completed");

      // Thumbnail Element
      const thumbnailEl = this.createThumbnailEl(item);
      
      // Title Text Element
      const titleEl = this.createTitleEl(position,item);

      // Border Element
      const borderEl = this.createBorderEl(position,item.id);
      
      borderEl.appendChild(thumbnailEl);
      borderEl.appendChild(titleEl);
      this.placesContainer.appendChild(borderEl);
    }
  }

});
